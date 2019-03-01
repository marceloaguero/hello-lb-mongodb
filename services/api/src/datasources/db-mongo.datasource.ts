import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './db-mongo.datasource.json';

export class DbMongoDataSource extends juggler.DataSource {
  static dataSourceName = 'dbMongo';

  constructor(
    @inject('datasources.config.dbMongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
