import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello, this is the replacer API');
  });

  it('should replace all "dog" value references with "cat" in the response object from POST /replacer', () => {
    return request(app.getHttpServer())
      .post('/replacer')
      .send({ pet: 'dog', info: { description: 'A dog' } })
      .expect(200)
      .expect({ pet: 'cat', info: { description: 'A dog' } });
  });

  it('should return a bad request error when a string is sent as the input for POST /replacer', () => {
    return request(app.getHttpServer())
      .post('/replacer')
      .set('Content-Type', 'application/json')
      .send('"dog"')
      .expect(400)
      .expect({
        message: 'Unexpected token " in JSON at position 0',
        error: 'Bad Request',
        statusCode: 400,
      });
  });
});
