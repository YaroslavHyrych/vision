import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
    private storage: {} = {
        admin: 'admin',
    };

    private sessions: string[] = [];

    constructor(private readonly jwtService: JwtService) {}

    login(login: string, pass: any): string | null {
        const isLogined: boolean = this.storage[login] === pass;
        if (!isLogined) return;
        const token: string = this.createToken(login);
        this.sessions.push(token);
        return token;
    }

    validate(token: string): boolean {
        return this.sessions.includes(token);
    }

    private createToken(login: string): string {
        return this.jwtService.sign({ login });
    }
}
