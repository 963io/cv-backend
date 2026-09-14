import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  getProfile() {
    return this.prisma.profile.findFirst({
      include: { links: true, skills: true, experience: true, projects: true },
    });
  }
}
