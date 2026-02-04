import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {Language} from '../../../core/constants/const';

@Directive({
  selector: '[appChangeLanguage]'
})
export class ChangeLanguageDirective {
  @Input({required: true}) currentLanguage!: Language;
  @Input({required: true}) buttonLanguage!: Language;
  @Output() languageChanged = new EventEmitter<Language>();

  @HostBinding('class.hero__button-active')
  get isActive() {
    return this.currentLanguage === this.buttonLanguage;
  }

  @HostListener('click')
  onClick() {
    this.languageChanged.emit(this.buttonLanguage);
  }
}
