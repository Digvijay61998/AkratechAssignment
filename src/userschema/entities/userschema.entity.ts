import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export interface VisitorInfo {
  visitorId: any;
  addedAt?: Date;
}

export type userDocument = UsersDetails & mongoose.Document;

@Schema({
  timestamps: true,
  virtuals: true,
  toJSON: {
    virtuals: true,
  },
})
export class UsersDetails {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
    phone: number; 

    @Prop({ required: true ,unique: true, })
    email: string;

    @Prop({ required: true })
    postalZip: string; 

    @Prop({ required: true })
    region: string; 

    @Prop({ required: true })
    country: string; 

    @Prop({ required: true })
    list: number; 

    @Prop({ required: true })
    text: string;

    @Prop({ required: true })
    numberrange: number;

    @Prop({ required: true })
    currency: string;

}



export const Userschema = SchemaFactory.createForClass(UsersDetails);

  
Userschema.index(
    {
      name: 'text',
      phone:'text',
      email: 'text'
    },
    {
      weights: {
        name: 10,
        phone:10,
        search_keywords: 5,
      },
    },
    
  );