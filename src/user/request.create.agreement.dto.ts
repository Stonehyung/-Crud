import { AbstractBaseEntityKeys } from '../../../utils/domains/abstract.base';
import { Agreement } from '@domains/agreement/agreement';
import { OmitType } from '@nestjs/swagger';

export class RequestCreateAgreementDto extends OmitType(
  Agreement,
  AbstractBaseEntityKeys,
) {}
