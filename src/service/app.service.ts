import { Injectable } from '@nestjs/common';
import { transform } from './transform';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, this is the replacer API';
  }

  replacer(input: { [key: string]: any }): any {
    if (input === null || input === undefined || typeof input !== 'object') {
      throw new Error('Input must be a valid JSON object');
    }
    return transform(input);
  }
}
