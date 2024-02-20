import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './service/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello, this is the replacer API');
    });
  });

  describe('replacer', () => {
    it('should return the same input with all value references of "dog" replaced with "cat"', () => {
      const input = [
        {
          name: 'dog',
          attributes: {
            review: 'a dog is a good pet',
            example: [
              {
                name: 'dog',
                nested: {
                  nested: {
                    name: 'dog',
                    review: 'a dog is a good pet',
                    nested: {
                      name: 'dog',
                      review: 'a dog is a good pet',
                    },
                  },
                },
                tested: {
                  nested: {
                    nested: {
                      name: 'dog',
                    },
                  },
                },
              },
            ],
          },
        },
      ];
      const output = [
        {
          name: 'cat',
          attributes: {
            review: 'a dog is a good pet',
            example: [
              {
                name: 'cat',
                nested: {
                  nested: {
                    name: 'cat',
                    review: 'a dog is a good pet',
                    nested: {
                      name: 'cat',
                      review: 'a dog is a good pet',
                    },
                  },
                },
                tested: {
                  nested: {
                    nested: {
                      name: 'cat',
                    },
                  },
                },
              },
            ],
          },
        },
      ];
      expect(appController.replacer(input)).toEqual(output);
    });

    it('should throw an error when the input is null', () => {
      const input = null;
      expect(() => appController.replacer(input)).toThrow(
        'Input must be a valid JSON object',
      );
    });

    it('should throw an error when the input is undefined', () => {
      const input = undefined;
      expect(() => appController.replacer(input)).toThrow(
        'Input must be a valid JSON object',
      );
    });
  });
});
