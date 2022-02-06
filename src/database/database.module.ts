import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';

@Module({})
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: options,
        },
      ],
    };
  }
}
