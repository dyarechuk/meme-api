import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import geoip from 'geoip-lite';

@Injectable()
export class CountryBlockMiddleware implements NestMiddleware {
  private blockedCountries = ['EE']; // ISO-коди країн

  use = (req: Request, res: Response, next: NextFunction) => {
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress;

    const geo = geoip.lookup(ip);

    if (geo && this.blockedCountries.includes(geo.country)) {
      console.warn(`Blocked request from country ${geo.country}, IP: ${ip}`);
      throw new ForbiddenException(`Access from ${geo.country} is blocked`);
    }

    next();
  };
}
