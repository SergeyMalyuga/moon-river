import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {Language} from '../../core/constants/const';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  private translate = inject(TranslateService);

  public isNavOpen = signal<boolean>(false);
  public currentLanguage = signal<Language>(Language.RU);

  public onNavToggled(isNavOpen: boolean) {
    this.isNavOpen.set(isNavOpen);
  }

  public changeLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.translate.use(language);
  }
}
