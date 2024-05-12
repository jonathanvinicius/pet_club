import { CreateUserDto } from '../../dto/CreateUserDto';
import { User } from '../../schemas/UserSchema';

export type ICreateUserResponse = User;
export type IFindAllResponse = User[];

export interface IUserRepository {
	create(user: CreateUserDto): Promise<ICreateUserResponse>;
	findAll(): Promise<IFindAllResponse>;
}
