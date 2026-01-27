import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatBadge} from '@angular/material/badge';
import {ToggleDirective} from '../../shared/directives/toggle.directive';

@Component({
  selector: 'app-header',
  imports: [
    MatBadge,
    ToggleDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public isNavOpen = signal<boolean>(false);

  public toggleNav() {
    this.isNavOpen.set(!this.isNavOpen());
  }
}
