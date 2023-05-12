import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { CategoryPopularComponent } from './category-popular/category-popular.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { BradcamComponent } from './bradcam/bradcam.component';
import { UserComponent } from './user/user.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginComponent } from './login/login.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapBasket, bootstrapPersonCircle } from '@ng-icons/bootstrap-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatBadgeModule } from '@angular/material/badge';
import { CartComponent } from './cart/cart.component'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './service/category.service';
import { ApiModule } from '../openapi/api.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MainComponent,
    SearchComponent,
    CategoryPopularComponent,
    AboutComponent,
    CategoriesComponent,
    BradcamComponent,
    UserComponent,
    LoginModalComponent,
    RegistrationModalComponent,
    UserInfoComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    NgIconsModule.withIcons({ bootstrapBasket, bootstrapPersonCircle }),
    BrowserAnimationsModule,
    MatBadgeModule,
    NgbDropdownModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [
    NgbActiveModal,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
