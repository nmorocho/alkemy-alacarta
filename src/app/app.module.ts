import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { ListItemComponent } from './core/components/list-item/list-item.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { ListPageComponent } from './core/pages/list-page/list-page.component';
import { SearchBarComponent } from './core/components/search-bar/search-bar.component';
import { FoodDetailPageComponent } from './core/pages/food-detail-page/food-detail-page.component';
import { SharedModule } from './shared/shared.module';
import { MenuItemComponent } from './core/components/menu-item/menu-item.component';
import { NgDompurifyModule } from '@tinkoff/ng-dompurify';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    HomePageComponent,
    ListPageComponent,
    SearchBarComponent,
    FoodDetailPageComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgDompurifyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
