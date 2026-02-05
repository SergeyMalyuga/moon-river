import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MapComponent} from '../../shared/map/map.component';

@Component({
  selector: 'app-store-selector',
  imports: [
    MapComponent
  ],
  templateUrl: './store-selector.component.html',
  styleUrl: './store-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreSelectorComponent {

}
