import { Injectable, Inject, Logger, HttpException } from "@nestjs/common";
import { CreateUserschemaDto } from './dto/create-userschema.dto';
import { UpdateUserschemaDto } from './dto/update-userschema.dto';
import { USERDETAILS_PROVIDER } from "./constant";
import { Model } from "mongoose";
import { userDocument } from "./entities/userschema.entity";
import { userQueryParams } from "./dto/search-userschema.dto";


@Injectable()
export class UserschemaService {
  private readonly logger = new Logger(UserschemaService.name);

  constructor(
    @Inject(USERDETAILS_PROVIDER)
    private readonly userModel: Model<userDocument>,
  ) { }
  

  async create(CreateUserschemaDto: CreateUserschemaDto) {
    try {
      const user = await this.userModel.create({
        ...CreateUserschemaDto,
      });
      return user;
    } catch (error) {
      this.logger.error(`Error creating tag: ${error.message}`);
      throw new HttpException(error.message, error.status || 500);
    }
  }

  async findAll(query?: userQueryParams) {
    console.log("query",query)
    try {
      const {
        skip,
        limit,
        search
      } = query;
      const queryObj = {};
      if (search) {
        queryObj['$text'] = { $search: search };
      }
      const user = await this.userModel
      .find(queryObj)
      .skip(skip)
      .sort({ createdAt: -1 })
        .limit(limit ? limit : 10)
        
        // if (limitOfDetails) {
        //   user.limit(limitOfDetails);
        // }
    // console.log("user",user)
      return user;
    } catch (error) {
      this.logger.error(
        `Error while getting data : ${error.message}`
      );
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
