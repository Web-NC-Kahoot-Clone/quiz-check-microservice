import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type QuestionDocument = Question & Document;

// inject schema to mongoose
@Schema()
export class Question {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' })
  quiz: string;
  // Nội dung của câu hỏi
  @Prop({ required: true })
  content: string;

  @Prop({ require: true, enum: [0, 1, 2, 3] })
  answer: number;

  // Để tiện cho việt đọc data sau này ta không lưu các câu trả lời thành mảng
  @Prop({ require: true })
  option1: string;

  @Prop({ require: true })
  option2: string;

  @Prop({ require: true })
  option3: string;

  @Prop({ require: true })
  option4: string;
  id: any;
}

// create a mongo schema  to use to create model
export const QuestionSchema = SchemaFactory.createForClass(Question);
