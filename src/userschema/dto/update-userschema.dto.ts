import { PartialType } from '@nestjs/swagger';
import { CreateUserschemaDto } from './create-userschema.dto';

export class UpdateUserschemaDto extends PartialType(CreateUserschemaDto) {}
