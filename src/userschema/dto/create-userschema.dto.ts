import {
    IsNotEmpty,
    IsString,
  } from "class-validator";

export class CreateUserschemaDto { 
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    phone: string;
  
    @IsNotEmpty()
    @IsString()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    address: string;
    
    @IsNotEmpty()
    @IsString()
    postalZip: string;

    @IsNotEmpty()
    @IsString()
    region: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsNotEmpty()
    @IsString()
    list: number;

    @IsNotEmpty()
    @IsString()
    test: string;

    @IsNotEmpty()
    @IsString()
    numberrange: number;

    @IsNotEmpty()
    @IsString()
    currency: string;
    
}
