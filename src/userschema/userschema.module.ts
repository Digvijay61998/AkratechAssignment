import { Module } from '@nestjs/common';
import { UserschemaService } from './userschema.service';
import { UserschemaController } from './userschema.controller';
import { userDetailsProviders } from './userDetails.provider';

@Module({
  controllers: [UserschemaController],
  providers: [UserschemaService, ...userDetailsProviders]
})
export class UserschemaModule {}
