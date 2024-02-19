import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/replacer')
  @HttpCode(200)
  replacer(@Body() input: { [key: string]: any }): any {
    return this.appService.replacer(input);
  }
}
