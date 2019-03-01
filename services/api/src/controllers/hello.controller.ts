import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Hello} from '../models';
import {HelloRepository} from '../repositories';

export class HelloController {
  constructor(
    @repository(HelloRepository)
    public helloRepository : HelloRepository,
  ) {}

  @post('/hellos', {
    responses: {
      '200': {
        description: 'Hello model instance',
        content: {'application/json': {schema: {'x-ts-type': Hello}}},
      },
    },
  })
  async create(@requestBody() hello: Hello): Promise<Hello> {
    return await this.helloRepository.create(hello);
  }

  @get('/hellos/count', {
    responses: {
      '200': {
        description: 'Hello model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Hello)) where?: Where,
  ): Promise<Count> {
    return await this.helloRepository.count(where);
  }

  @get('/hellos', {
    responses: {
      '200': {
        description: 'Array of Hello model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Hello}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Hello)) filter?: Filter,
  ): Promise<Hello[]> {
    return await this.helloRepository.find(filter);
  }

  @patch('/hellos', {
    responses: {
      '200': {
        description: 'Hello PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() hello: Hello,
    @param.query.object('where', getWhereSchemaFor(Hello)) where?: Where,
  ): Promise<Count> {
    return await this.helloRepository.updateAll(hello, where);
  }

  @get('/hellos/{id}', {
    responses: {
      '200': {
        description: 'Hello model instance',
        content: {'application/json': {schema: {'x-ts-type': Hello}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Hello> {
    return await this.helloRepository.findById(id);
  }

  @patch('/hellos/{id}', {
    responses: {
      '204': {
        description: 'Hello PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() hello: Hello,
  ): Promise<void> {
    await this.helloRepository.updateById(id, hello);
  }

  @put('/hellos/{id}', {
    responses: {
      '204': {
        description: 'Hello PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() hello: Hello,
  ): Promise<void> {
    await this.helloRepository.replaceById(id, hello);
  }

  @del('/hellos/{id}', {
    responses: {
      '204': {
        description: 'Hello DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.helloRepository.deleteById(id);
  }
}
