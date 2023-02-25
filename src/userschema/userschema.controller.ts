import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserschemaService } from './userschema.service';
import { CreateUserschemaDto } from './dto/create-userschema.dto';
import { UpdateUserschemaDto } from './dto/update-userschema.dto';
import { userQueryParams } from './dto/search-userschema.dto';
import { ApiTags, ApiOperation, ApiBody} from '@nestjs/swagger';

@Controller('usersDetails')
@ApiTags('User')
export class UserschemaController {
  constructor(private readonly userschemaService: UserschemaService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
 
  
  create(@Body() createUserschemaDto: CreateUserschemaDto) {
    return this.userschemaService.create(createUserschemaDto);
  }

  @Get()
  async findAll(@Query() query: userQueryParams) {
    return this.userschemaService.findAll(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserschemaDto: UpdateUserschemaDto) {
    return this.userschemaService.update(id, updateUserschemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userschemaService.remove(id);
  }
}
