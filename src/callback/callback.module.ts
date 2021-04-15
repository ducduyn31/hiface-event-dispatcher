import { Module } from '@nestjs/common';
import { CallbackController } from './callback.controller';
import { KafkaService } from '../kafka/kafka.service';

@Module({
  providers: [KafkaService],
  controllers: [CallbackController],
})
export class CallbackModule {}
