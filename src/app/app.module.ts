import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemgetComponent } from './item/itemget/itemget.component';
import { ItemService } from './item.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import {MatBadgeModule} from '@angular/material/badge';
import { ItemComponent } from './item/item.component'
import { CouponsComponent } from './coupons/coupons.component';
import { FooterComponent } from './footer/footer.component';
import { BuynowComponent } from './buynow/buynow.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Register'},
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'itemget', component:ItemgetComponent},
  { path: 'item', component: ItemComponent},
  {path: 'coupons', component: CouponsComponent},
  {path:'cart',component:CartComponent},
  {path:'footer', component: FooterComponent},
  {path:'buynow', component: BuynowComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,

    HomeComponent,
    RegisterComponent,
    ItemComponent,
    ItemgetComponent,
    CartComponent,
    CouponsComponent,
    FooterComponent,
    BuynowComponent,
   
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule, BrowserAnimationsModule,
    HttpClientModule,ToastrModule.forRoot(),MatBadgeModule
  ],
  providers: [ItemService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
