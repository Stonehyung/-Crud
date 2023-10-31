import { RequestCreateAgreementDto } from './request.create.agreement.dto';
import { PartialType } from '@nestjs/swagger';

export class RequestUpdateAgreementDto extends PartialType(RequestCreateAgreementDto) {}
