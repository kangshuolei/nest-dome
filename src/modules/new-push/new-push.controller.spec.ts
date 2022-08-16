import { Test, TestingModule } from '@nestjs/testing';
import { NewPushController } from './new-push.controller';
import { NewPushService } from './new-push.service';

describe('NewPushController', () => {
  let controller: NewPushController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewPushController],
      providers: [NewPushService],
    }).compile();

    controller = module.get<NewPushController>(NewPushController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
