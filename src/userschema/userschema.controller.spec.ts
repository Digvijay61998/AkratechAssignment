import { Test, TestingModule } from '@nestjs/testing';
import { UserschemaController } from './userschema.controller';
import { UserschemaService } from './userschema.service';

describe('UserschemaController', () => {
  let controller: UserschemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserschemaController],
      providers: [UserschemaService],
    }).compile();

    controller = module.get<UserschemaController>(UserschemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
