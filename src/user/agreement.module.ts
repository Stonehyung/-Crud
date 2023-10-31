import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agreement } from './agreement';
import { AgreementService } from './agreement.service';
import { AgreementController } from './agreement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Agreement])],
  providers: [AgreementService],
  exports: [AgreementService],
  controllers: [AgreementController],
})
export class AgreementModule {}
