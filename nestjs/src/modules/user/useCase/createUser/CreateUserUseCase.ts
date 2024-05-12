import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/CreateUserDto';
import { IUserRepository } from '../../repository/interfaces/IUserRepository';

@Injectable()
export class CreateUserUseCase {
	constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository) {}

	async create(createUserDto: CreateUserDto) {
		return this.userRepository.create(createUserDto);
	}
}
