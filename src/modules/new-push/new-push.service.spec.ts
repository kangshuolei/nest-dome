import { Test, TestingModule } from '@nestjs/testing';
import { NewPushService } from './new-push.service';

describe('NewPushService', () => {
  let service: NewPushService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewPushService],
    }).compile();

    service = module.get<NewPushService>(NewPushService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
