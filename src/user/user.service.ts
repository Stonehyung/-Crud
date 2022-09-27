import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserEntity } from './user.entity';



@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity>{ //TypeOrmCrud 를 상속받아서 다양한 메소드를 사용가능하다.
    constructor(@InjectRepository(UserEntity) repo) { //UserEntity를 주입한다. 이름은  repo 로 사용하겠다.
        super(repo); // 

    }
}

