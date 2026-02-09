import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SwiperComponent} from '../swiper/swiper.component';

@Component({
  selector: 'app-social',
  imports: [
    SwiperComponent
  ],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {

}
