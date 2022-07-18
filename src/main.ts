import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';
async function bootstrap() {
  // Để xử dụng một giao thức khác ở tầng stranport ta sử dụng MicroserviceOptions để định nghĩa giao thức
  // Trong ví dụ dưới ta sử dụng giao thức grpc
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'User',
        protoPath: join(__dirname, 'user/proto/user.proto'),
        url: 'localhost:54321',
      },
    },
  );
  app.startAllMicroservices();
}
bootstrap();
