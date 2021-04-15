import { Injectable, Scope } from '@nestjs/common';
import { Kafka, logLevel } from 'kafkajs';
import { Topic } from '../topics';

@Injectable({
  scope: Scope.DEFAULT,
})
export class KafkaService {
  private readonly _kafka: Kafka = new Kafka({
    clientId: process.env.KAFKA_ID + (((Math.random() * 100) % 100) + 1),
    brokers: [...process.env.KAFKA_BROKERS?.split(',')],
    logLevel:
      process.env.NODE_ENV === 'development' ? logLevel.DEBUG : logLevel.ERROR,
  });
  private readonly _producer = this._kafka.producer({
    allowAutoTopicCreation: true,
  });

  public async send(topic: Topic, key: any, message: any) {
    await this._producer.connect();

    return await this._producer.send({
      topic,
      messages: [
        {
          key,
          value: message.toString(),
        },
      ],
    });
  }
}
