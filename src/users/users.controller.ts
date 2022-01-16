/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id:string): Promise<User>{
   return this.usersService.findOne(id);
  }
  @Post()
  async create(@Body() user: User ) {
    this.usersService.create(user);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.usersService.remove(id);

  } 
  @Put(':id')
  async update(@Param("id") id:string, @Body() user: User ) {
    this.usersService.update(id,user);
  }
}
 
