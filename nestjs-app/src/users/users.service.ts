import { Injectable } from '@nestjs/common';
import { CreateUserDto, createProfileDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const CreateData: Prisma.UserCreateInput = {
      ...createUserDto,
      profile: {
        create: {
          ...createUserDto.profile
        }
      }
    }
    return await this.prisma.user.create({ data: CreateData, include: { profile: true } });
  }

  async findAll() {
    return await this.prisma.user.findMany({ include: { posts: true, profile: true } });
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
