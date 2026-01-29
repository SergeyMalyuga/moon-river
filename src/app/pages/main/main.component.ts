import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public isNavOpen = signal<boolean>(false);

  public onNavToggled(isNavOpen: boolean) {
    this.isNavOpen.set(isNavOpen);
  }
}
