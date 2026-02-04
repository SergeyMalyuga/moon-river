import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ChangeLanguageDirective} from './directives/change-language.directive';
import {Language} from '../../core/constants/const';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [
    ChangeLanguageDirective,
    TranslatePipe
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  @Input({required: true}) isDarkTheme!: boolean;
  @Input({required: true}) currentLanguage!: Language;
  @Output() languageChanged = new EventEmitter<Language>();

  public readonly Language = Language;

  public onLanguageChange(language: Language): void {
    this.languageChanged.emit(language);
  }
}
