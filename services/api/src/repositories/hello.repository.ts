import {DefaultCrudRepository} from '@loopback/repository';
import {Hello} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HelloRepository extends DefaultCrudRepository<
  Hello,
  typeof Hello.prototype.id
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(Hello, dataSource);
  }
}
