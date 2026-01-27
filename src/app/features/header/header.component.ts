import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatBadge} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [
    MatBadge,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
