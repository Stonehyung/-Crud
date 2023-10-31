import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Agreement } from './agreement';
import { AgreementService } from './agreement.service';
import { RequestCreateAgreementDto } from './dto/request.create.agreement.dto';
import { RequestUpdateAgreementDto } from './dto/request.update.agreement.dto';

@Crud({
  model: {
    type: Agreement,
  },
  dto: {
    create: RequestCreateAgreementDto,
    update: RequestUpdateAgreementDto,
  },
  query: {
    softDelete: true,
  },
})
@Controller('agreement')
export class AgreementController implements CrudController<Agreement> {
  constructor(public service: AgreementService) {}
}
