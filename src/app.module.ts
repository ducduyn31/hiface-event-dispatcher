import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallbackModule } from './callback/callback.module';
import { KafkaService } from './kafka/kafka.service';

@Module({
  imports: [CallbackModule],
  controllers: [AppController],
  providers: [AppService, KafkaService],
})
export class AppModule {}
