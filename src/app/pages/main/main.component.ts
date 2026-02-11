import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {Language} from '../../core/constants/const';
import {TranslateService} from '@ngx-translate/core';
import {CategoriesComponent} from '../../features/categories/categories.component';
import {StoreSelectorComponent} from '../../features/store-selector/store-selector.component';
import {ProductsComponent} from '../../features/products/products.component';
import {SocialComponent} from '../../features/social/social.component';
import {ContactsComponent} from '../../features/contacts/contacts.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, HeroComponent, CategoriesComponent, StoreSelectorComponent, ProductsComponent, SocialComponent, ContactsComponent],
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
