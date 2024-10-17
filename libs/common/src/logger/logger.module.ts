import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerr } from 'nestjs-pino';

@Module({
  imports: [
    PinoLoggerr.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
  ],
})
export class LoggerModule {}
