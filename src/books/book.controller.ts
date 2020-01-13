import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './book.service';
import { CreateBookDto } from './dto/book.dto';
import { Book } from './interface/book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return await this.bookService.craete(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return await this.bookService.findAll();
  }
}
