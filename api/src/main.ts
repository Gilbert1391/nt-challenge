import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';

import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const dbConfig = config.get('db');

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ validationError: { target: false } }),
  );
  app.enableCors();
  app.use(helmet());

  const port = process.env.PORT || serverConfig.port;
  console.log(`Listening on port ${port}`);
  console.log(`Connected to ${dbConfig}`);

  await app.listen(port);
}
bootstrap();
