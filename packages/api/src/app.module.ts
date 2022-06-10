import {
  ReflectMetadataProvider,
  UnderscoreNamingStrategy
} from '@mikro-orm/core';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { OperationsModule } from './operations/operations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        clientUrl: configService.get<string>('CLIENT_URL'),
        debug: configService.get<boolean>('DEBUG'),
        entities: [configService.get<string>('ENTITIES_PATH')],
        entitiesTs: [configService.get<string>('ENTITIES_PATH_TS')],
        metadataProvider: ReflectMetadataProvider,
        migrations: {
          path: configService.get<string>('PATH'),
          pathTs: configService.get<string>('PATH_TS'),
        },
        namingStrategy: UnderscoreNamingStrategy,
        tsNode: configService.get<boolean>('USE_TS_NODE'),
      }),
    }),
    AuthModule,
    OperationsModule,
    UsersModule,
    CategoriesModule,
  ],
})
export class AppModule {}
