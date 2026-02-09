import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, OnDestroy} from '@angular/core';
import Swiper from 'swiper';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
  private swiper!: Swiper;

  constructor(private elementRef: ElementRef) {
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy()
    }
  }

  ngAfterViewInit(): void {
    this.init();
  }

  private init() {
    const target = this.elementRef.nativeElement.querySelector('.swiper');
    this.swiper = new Swiper(target, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: "auto",
      spaceBetween: 25,
      autoplay: {
        disableOnInteraction: true,
      },
      speed: 600,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
}
