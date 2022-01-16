import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '5.5.0.2',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'dbbudibase',
      entities: [],
      autoLoadEntities: true,  //tabloların otomatik yaratılması
      synchronize: true,       // tabloların otomatik yaratılması
    }),
    UsersModule, ProductsModule,
  ],
  
})
export class AppModule {}
