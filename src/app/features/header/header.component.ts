import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  signal,
} from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { ToggleDirective } from '../../shared/directives/toggle.directive';
import { SelectCategoryDirective } from './directives/select-category.directive';
import { ProductCategory } from '../../core/constants/const';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [MatBadge, ToggleDirective, SelectCategoryDirective, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() navToggled = new EventEmitter<boolean>();

  public isNavOpen = signal<boolean>(false);
  public activeCategory = signal<ProductCategory>(ProductCategory.JEWELERY);

  public toggleNav() {
    this.isNavOpen.set(!this.isNavOpen());
    this.navToggled.emit(this.isNavOpen());
  }

  public selectCategory(category: ProductCategory) {
    this.activeCategory.set(category);
  }

  protected readonly ProductCategory = ProductCategory;
}
