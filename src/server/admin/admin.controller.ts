import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AdminService } from './admin.service';

@Controller('/')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('*')
  static(@Req() req: Request, @Res() res: Response) {
    const handle = this.adminService.getNextServer().getRequestHandler();
    handle(req, res);
  }
}
