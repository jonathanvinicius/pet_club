import { Module } from '@nestjs/common';
import { UserRepository } from './repository/UserRepository';
import { CreateUserUseCase } from './useCase/createUser/CreateUserUseCase';
import { UserController } from './controller/UserController';
import { UserSchema } from './schemas/UserSchema';
import { MongooseModule } from '@nestjs/mongoose';
import { FindUserUseCase } from './useCase/findUser/FindUserUseCase';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
	controllers: [UserController],
	providers: [CreateUserUseCase, FindUserUseCase, { provide: 'IUserRepository', useClass: UserRepository }],
})
export class UserModule {}
