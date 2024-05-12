import { CreateUserDto } from '../dto/CreateUserDto';
import { User } from '../schemas/UserSchema';
import { ICreateUserResponse, IFindAllResponse, IUserRepository } from './interfaces/IUserRepository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class UserRepository implements IUserRepository {
	constructor(@InjectModel(User.name) private readonly userSchema: Model<User>) {}

	async create(user: CreateUserDto): Promise<ICreateUserResponse> {
		const createdUser = new this.userSchema(user);

		return createdUser.save();
	}

	async findAll(): Promise<IFindAllResponse> {
		return this.userSchema.find().exec();
	}
}
