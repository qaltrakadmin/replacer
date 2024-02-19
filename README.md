# Replacer API

An API that replaces all values of 'dog' with 'cat' in a given object but not any strings containing dog.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Production readiness considerations

- **Error Handling**: Implement robust error handling for malformed JSON and unexpected input.
- **Logging**: Integrate a logging library for better insight into runtime behavior and errors.
- **Documentation**: Document the API endpoint using tools like OpenAPI specification.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Set up CI/CD pipelines using GitHub Actions or
  similar services for automated testing and deployment.
- **Git hooks**: Use Git hooks to enforce code quality and standards by running tasks tests and linting.
- **Security**: Use Helmet to secure Express apps by setting various HTTP headers.
- **Monitoring**: Integrate monitoring tools for better insight into the
  application's performance and behavior.
- **Rate Limiting**: Implement rate limiting to prevent abuse of the API.
- **Caching**: Use caching to improve the performance of the API.
- **Performance Optimization**: Optimize the application for better performance and scalability
  by implementing a more efficient algorithm to handle larger objects to reduce response time and memory usage.

## License

Nest is [MIT licensed](LICENSE).
