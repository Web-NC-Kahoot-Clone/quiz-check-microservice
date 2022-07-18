import { UserDocument } from './schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  // ta khởi tạo user schema từ định nghĩa ta đã thêm vào ở user controller
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
  create(createUserDto: CreateUserDto) {
    // create new model
    const user = new this.userModel(createUserDto);
    // save model to data base
    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
