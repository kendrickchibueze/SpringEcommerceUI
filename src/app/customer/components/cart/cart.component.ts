import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartItems:any[]  = [];
  order:any;

  constructor(private customerService:CustomerService,
              private snackBar:MatSnackBar,
              private fb:FormBuilder,
              public dialog:MatDialog) {
  }
    ngOnInit(): void {
    this.getCart()

    }

    getCart(){
    this.cartItems = []
    this.customerService.getCartByUserId().subscribe(res=>{
      this.order = res;
      res.cartItems.forEach(element=>{
        element.processedImg = 'data:image/jpeg;base64, ' + element.returnedImg;
        this.cartItems.push(element)
      })
    },
      error => {})
    }

}
