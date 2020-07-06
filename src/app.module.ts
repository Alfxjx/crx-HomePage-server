import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BingModule } from './bing/bing.module';
import { WeatherModule } from './weather/weather.module';
import { UserModule } from './user/user.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [BingModule, WeatherModule, UserModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
