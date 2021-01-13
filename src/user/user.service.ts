import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepo : Repository<UserEntity>) {}

    createUser(email: string) {
        return this.userRepo.create({email}).save();
    }

    getUserByEmail(email: string) {
        return this.userRepo.findOne({email});
    }
}
