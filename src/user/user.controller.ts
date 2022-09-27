import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController, CrudService } from '@nestjsx/crud';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';


@Crud({
    model: {
        type: UserEntity,
    },
})
//implements CrudController<UserEntity>
@Controller('users')
export class UserController implements CrudController<UserEntity> {
    constructor(public service: UserService) {
    }// 
    // service: CrudService<UserEntity>;


}

