import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book } from './interface/book.interface';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async craete(book: Book): Promise<Book> {
    return await this.bookModel.create(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }
}
