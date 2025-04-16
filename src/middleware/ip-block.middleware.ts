
import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IpBlockMiddleware implements NestMiddleware {
  private blockedIps = ['77.87.155.102'];

  use = (req: Request, res: Response, next: NextFunction) => {
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.socket.remoteAddress;
    if (this.blockedIps.includes(ip!)) {
      throw new ForbiddenException('Access denied');
    }
    next();
  };
}
