import { Module } from '@nestjs/common';
import { ConstantModule } from './constant/constant.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './_configs';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', `${process.cwd()}/.env.${process.env.NODE_ENV}`],
    }),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    ConstantModule,
    AuthModule,
    UserModule,
    FilesModule,
    AdminModule,
  ],
})
export class AppModule {}
