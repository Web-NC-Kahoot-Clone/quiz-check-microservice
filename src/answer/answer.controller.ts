import { Question, QuestionId } from './entities/answer.entity';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Controller()
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @GrpcMethod('QuestionService', 'FindOne')
  findOne(
    data: QuestionId,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Question {
    const items = {
      id: '62d5f996b1398730ce1c9813',
      content:
        'Vì sao ở Campuchia lại có nhiều việc vừa nhẹ mà lương lại cao đến thế',
      option1:
        'Vì ở Campuchia đã áp dụng thành công trí tuệ nhân tạo để thay con người làm tất cả mọi việc',
      option2: 'vì camp giàu',
      option3: 'vì camp độc',
      option4: 'vì camp độc',
      answer: 1,
      quiz: '5e9f8f8f8f8f8f8f8f8f8f8',
    };

    return items;
  }
}
