export class CallbackRequestDto {
  blur: number;
  device_token: string;
  liveness_score: number;
  liveness_type: number;
  mask_type: number;
  pass_type: 0;
  person_code: string;
  person_id: string;
  person_name: string;
  photo: string;
  recognition_score: number;
  recognition_type: number;
  temperature: number;
  temperature_type: number;
  timestamp: Date;
  verification_mode: number;
}
