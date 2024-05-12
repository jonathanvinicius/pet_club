import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../repository/interfaces/IUserRepository';

@Injectable()
export class FindUserUseCase {
	constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository) {}

	async findAll() {
		return this.userRepository.findAll();
	}
}
