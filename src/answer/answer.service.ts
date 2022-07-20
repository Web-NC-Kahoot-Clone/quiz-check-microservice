import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Question } from './schemas/question.schema';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel('Question') private questionModel: Model<Question>,
  ) {}

  // Tìm 1 câu hỏi theo id
  async findOne(id: string): Promise<Question> {
    return await this.questionModel.findById(id);
  }

  // so sánh câu trả lời từ input với câu trả lời của câu hỏi
  async checkAnswer(id: string, answer: number): Promise<boolean> {
    // tìm câu hỏi theo id
    const question = await this.questionModel.findById(id);
    return question.answer === answer;
  }
}
