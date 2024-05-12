import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/petclub')],
	controllers: [],
	providers: [],
})
export class AppModule {}
