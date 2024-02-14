import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PostCategoryComponent } from './components/post-category/post-category.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { PostProductComponent } from './components/post-product/post-product.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import { PostcouponComponent } from './components/postcoupon/postcoupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostCategoryComponent,
    PostProductComponent,
    PostcouponComponent,
    CouponsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatTableModule
  ]
})
export class AdminModule { }
