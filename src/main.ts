import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from "@nestjs/common";
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from "nest-winston"
import { ConfigService } from "@nestjs/config";
import * as winston from "winston";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as express from "express";

const logger =
  process.env.NODE_ENV === "production"
    ? WinstonModule.createLogger({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),

              winston.format.colorize(),
              nestWinstonModuleUtilities.format.nestLike("Backend", {
                // options

                colors: true,
              })
            ),
          }),
          new winston.transports.File({
            filename: "logs/backend.error.log",
            level: "error",
          }),

          new winston.transports.File({
            filename: "logs/backend.combined.log",
          }),
        ],
      })
    : new Logger("Backend");

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: logger,
  });
  const configService = app.get(ConfigService);
  const port = configService.get("port");
  app.use(express.json({ limit: "50mb" }));
  const options = new DocumentBuilder()
  .setTitle("iNeuron")
  .setDescription("test assignment iNeuron")
  .setVersion("1.0.0")
  // .addBearerAuth()
  .setContact("Help", "", "digvijaykadam61998.com")
  .setTitle("iNeuron assignment API")
  .build();

const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup("/api/docs", app, document, {
  swaggerOptions: {
    tagsSorter: "alpha",
    operationsSorter: "alpha",
  },
});
  
  //  ******  swagger url
// http://localhost:4000/api/docs#
  await app.listen(port);
}
bootstrap();
