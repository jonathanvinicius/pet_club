import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserUseCase } from '../useCase/createUser/CreateUserUseCase';
import { CreateUserDto } from '../dto/CreateUserDto';
import { FindUserUseCase } from '../useCase/findUser/FindUserUseCase';

@Controller('users')
export class UserController {
	constructor(
		private readonly createUserUseCase: CreateUserUseCase,
		private readonly findUserUseCase: FindUserUseCase,
	) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.createUserUseCase.create(createUserDto);
	}

	@Get()
	findAll() {
		return this.findUserUseCase.findAll();
	}

	// @Get(':id')
	// findOne(@Param('id') id: string) {
	// 	return this.userService.findOne(+id);
	// }

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
	// 	return this.userService.update(+id, updateUserDto);
	// }

	// @Delete(':id')
	// remove(@Param('id') id: string) {
	// 	return this.userService.remove(+id);
	// }
}
