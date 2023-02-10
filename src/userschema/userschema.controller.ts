import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserschemaService } from './userschema.service';
import { CreateUserschemaDto } from './dto/create-userschema.dto';
import { UpdateUserschemaDto } from './dto/update-userschema.dto';
import { userQueryParams } from './dto/search-userschema.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('usersDetails')
@ApiTags('User')
export class UserschemaController {
  constructor(private readonly userschemaService: UserschemaService) {}

  @Post()
  create(@Body() createUserschemaDto: CreateUserschemaDto) {
    return this.userschemaService.create(createUserschemaDto);
  }

  @Get()
  async findAll(@Query() query: userQueryParams) {
    return this.userschemaService.findAll(query);
  }

}
