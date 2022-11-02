import { Module } from '@nestjs/common';
import { ConstantController } from './constant.controller';
import { ConstantService } from './constant.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ConstantController],
  providers: [ConstantService],
})
export class ConstantModule {}
