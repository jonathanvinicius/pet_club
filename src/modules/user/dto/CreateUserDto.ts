import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty({ message: 'Name is required' })
	name: string;

	@IsString()
	@IsNotEmpty({ message: 'Email is required' })
	@IsEmail()
	email: string;

	@IsString()
	@IsNotEmpty({ message: 'Password is required' })
	password: string;
}
