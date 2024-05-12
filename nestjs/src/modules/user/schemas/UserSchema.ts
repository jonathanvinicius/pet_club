import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { NextFunction } from 'express';

@Schema({ collection: 'users', timestamps: true })
export class User {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	email: string;

	@Prop({ select: false })
	password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next: NextFunction) {
	this.password = await hash(this.password, 10);
	next();
});

UserSchema.set('toJSON', {
	transform: function (doc, ret) {
		delete ret.password;
		return ret;
	},
});
