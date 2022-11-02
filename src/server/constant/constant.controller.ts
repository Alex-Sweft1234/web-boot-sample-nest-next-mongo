import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBasicAuth } from '@nestjs/swagger';
import { BasicGuard } from 'src/server/_guards';
import { ConstantModel } from './constant.model';
import { ConstantService } from './constant.service';

@ApiTags('Constant-controller')
@ApiBasicAuth()
@Controller('api/constant')
export class ConstantController {
  constructor(private readonly constantService: ConstantService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get successfully',
    type: ConstantModel,
    links: {},
  })
  // @UseGuards(BasicGuard)
  @Get('get')
  async get() {
    return this.constantService.get();
  }
}
