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
import { ApiModule } from '../openapi/api.module'
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ManagerComponent } from './manager/manager.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UserListComponent } from './user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductAdminListComponent } from './product-admin-list/product-admin-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


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
    CartComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ManagerComponent,
    UserListComponent,
    OrdersListComponent,
    CategoryListComponent,
    ProductAdminListComponent,
    CategoryEditComponent,
    ProductEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    NgIconsModule.withIcons({ bootstrapBasket, bootstrapPersonCircle }),
    BrowserAnimationsModule,
    MatBadgeModule,
    NgbDropdownModule,
    HttpClientModule,
    ApiModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
