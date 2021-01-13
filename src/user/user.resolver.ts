import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {

    constructor(private userService: UserService) {}

    @Mutation()
    async login(@Args('email') email: string) {
        let user = await this.userService.getUserByEmail(email);
        if (!user) {
            user = await this.userService.createUser(email);
        }
        return user;
    }
}
