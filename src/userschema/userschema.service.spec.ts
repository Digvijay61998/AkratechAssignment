import { Test, TestingModule } from '@nestjs/testing';
import { UserschemaService } from './userschema.service';

describe('UserschemaService', () => {
  let service: UserschemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserschemaService],
    }).compile();

    service = module.get<UserschemaService>(UserschemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
