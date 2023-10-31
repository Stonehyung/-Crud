import { Injectable } from '@nestjs/common';
import { Agreement } from './agreement';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class AgreementService extends TypeOrmCrudService<Agreement> {
  constructor(@InjectRepository(Agreement) repo) {
    super(repo);
  }
}
