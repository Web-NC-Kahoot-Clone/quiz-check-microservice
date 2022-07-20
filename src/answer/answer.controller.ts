import { Question, QuestionId } from './entities/answer.entity';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

interface Bool {
  isRight: boolean;
}

interface Answer {
  questionId: string;
  answer: number;
}

@Controller()
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  // Sử dụng grpc method decorator để định nghĩa grpc service
  @GrpcMethod('QuestionService', 'FindOne')
  async findOne(
    data: QuestionId,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<Question> {
    const items = await this.answerService.findOne(data.id);
    const result = {
      id: items.id,
      content: items.content,
      answer: items.answer,
      option1: items.option1,
      option2: items.option2,
      option3: items.option3,
      option4: items.option4,
      quiz: items.quiz,
    };
    return result;
  }

  @GrpcMethod('QuestionService')
  async CheckAnswer(
    data: Answer,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<Bool> {
    const result = await this.answerService.checkAnswer(
      data.questionId,
      data.answer,
    );
    const value = { isRight: result };
    return value;
  }
}
