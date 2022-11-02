import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';
import { NextServer } from 'next/dist/server/next';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AdminService implements OnModuleInit {
  constructor(private readonly configService: ConfigService, private server: NextServer) {}

  async onModuleInit(): Promise<void> {
    try {
      this.server = next({ dev: this.configService.get<string>('NEST_PROFILE') !== 'prod', dir: './src/admin' });
      await this.server.prepare();
    } catch (error) {
      console.log(error);
    }
  }

  getNextServer(): NextServer {
    return this.server;
  }
}
