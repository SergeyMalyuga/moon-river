import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ProductCategory } from '../../../core/constants/const';

@Directive({
  selector: '[appSelectCategory]',
})
export class SelectCategoryDirective {
  @Input({ required: true }) category!: ProductCategory;
  @Output() categorySelected = new EventEmitter<ProductCategory>();

  @HostListener('click')
  onClick() {
    this.categorySelected.emit(this.category);
  }
}
