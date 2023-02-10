
import { Provider } from '@nestjs/common';
import { USERDETAILS_PROVIDER } from './constant';
import { Userschema, userDocument, UsersDetails } from './entities/userschema.entity';
import { DATABASE_PROVIDER } from 'src/constants';
import { Connection } from 'mongoose';

export const userDetailsProviders: Provider[] = [
  {
    provide: USERDETAILS_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model<userDocument>(UsersDetails.name, Userschema),
    inject: [DATABASE_PROVIDER],
  },
];
