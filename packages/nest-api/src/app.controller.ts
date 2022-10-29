import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MyClass } from '@marin/my-controls/src';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    const d = new MyClass();
    console.log('hola');

    return d.doSomething(); //this.appService.getHello();
  }
}
