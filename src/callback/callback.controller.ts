import { Body, Controller, Post } from '@nestjs/common';
import { CallbackRequestDto } from './dto/CallbackRequestDto';
import { KafkaService } from '../kafka/kafka.service';
import { Topic } from '../topics';

@Controller('callback')
export class CallbackController {
  constructor(private kafka: KafkaService) {}

  @Post()
  public callback(@Body() callbackBody: CallbackRequestDto) {
    this.kafka.send(
      Topic.SUBJECT_DETECTED,
      callbackBody.person_id,
      callbackBody,
    );
    return '';
  }
}
