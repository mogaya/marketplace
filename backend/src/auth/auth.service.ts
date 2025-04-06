import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  // Validate the user credentials
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; // Exclude password from the result
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

// Generate and return access and refresh tokens
async login(user: any) {
  const payload = { email: user.email, role: user.role };

  const access_token = this.jwtService.sign(payload, {
    secret: process.env.JWT_ACCESS_SECRET,
    expiresIn: '30m', // Short expiry for access token
  });

  const refresh_token = this.jwtService.sign(payload, {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: '1d', // Longer expiry for refresh token
  });

  // Optional: store refresh token in DB (hashed if needed) for future verification
  // await this.prisma.user.update({
  //   where: { email: user.email },
  //   data: { refreshToken: hashedRefreshToken },
  // });

  return {
    access_token,
    refresh_token,
    user,
  };
}

}
