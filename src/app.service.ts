import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  body: string;

  constructor() {
    this.body = '<h1>--- Hello World! ---</h1>';
  }

  getHello(): string {
    return this.body;
  }
}
