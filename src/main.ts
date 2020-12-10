import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const VISION_TCP_PORT: number = 3005;
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.TCP,
        options: {
            port: VISION_TCP_PORT,
            retryAttempts: 5,
            retryDelay: 3000,
        },
    });
    app.listen(() => console.log(`Vision is started on ${VISION_TCP_PORT}`));
}
bootstrap();
