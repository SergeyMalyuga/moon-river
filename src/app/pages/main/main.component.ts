import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {Language} from '../../core/constants/const';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public isNavOpen = signal<boolean>(false);
  public currentLanguage = signal<Language>(Language.RU);

  public onNavToggled(isNavOpen: boolean) {
    this.isNavOpen.set(isNavOpen);
  }
}
