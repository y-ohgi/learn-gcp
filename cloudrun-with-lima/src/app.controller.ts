import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('2')
  getHello2(): string {
    return 'hello2';
  }

  @Get('/3')
  getHello3(): string {
    return 'hello3';
  }
}
