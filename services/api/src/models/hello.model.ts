import {Entity, model, property} from '@loopback/repository';

@model()
export class Hello extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  hello: string;


  constructor(data?: Partial<Hello>) {
    super(data);
  }
}
