import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @MessagePattern({ cmd: 'login' })
    login({ login, pass }: LoginPayload): string {
        return this.appService.login(login, pass);
    }

    @MessagePattern({ cmd: 'validate' })
    validate({ token }: ValidatePayload): boolean {
        return this.appService.validate(token);
    }
}

interface LoginPayload {
    login?: string;
    pass?: string;
}

interface ValidatePayload {
    token?: string;
}
