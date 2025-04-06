import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  // Create the application instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable CORS
  app.enableCors();

  // Enable static assets (e.g., for file uploads)
  app.useStaticAssets(join(__dirname, '..', 'media'), {
    prefix: '/media/',  // URL prefix for static assets
  });

  // Start the application on the specified port (default to 4000)
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
