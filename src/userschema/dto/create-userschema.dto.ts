import {
    IsNotEmpty,
    IsString,
    IsNumber
  } from "class-validator";
import { Type } from 'class-transformer';
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserschemaDto { 
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
  @ApiPropertyOptional({
    default: '123456789',
  })
    phone: string;
  
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    address: string;
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Type(() => Number)

    postalZip: Number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    region: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    country: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()

    list: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    text: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Type(() => Number)

    numberrange: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    currency: string;
    
}
