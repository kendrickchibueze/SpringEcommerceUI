import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products:any[] = []
  searchProductForm!:FormGroup

  constructor(private adminService:AdminService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar){

  }

  ngOnInit(): void {
    this.getAllProducts()
    this.searchProductForm = this.fb.group({
      title:[null, [Validators.required]]
    })
  }



  getAllProducts(){
    this.products = [];
    this.adminService.getAllProducts().subscribe(res=>{
      res.forEach(element=>{
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element)
      })
    })
  }

  deleteProduct(productId:any){
    this.adminService.deleteProduct(productId).subscribe(res=>{
       if(res == null){
         this.snackBar.open('Product Deleted Successfully!', 'Close', {
           duration:5000
         });
         this.getAllProducts();

       }else{
         this.snackBar.open(res.message, 'Close', {
           duration:5000,
           panelClass: 'error-snackbar'
         })
       }

    })
  }



  submitForm(){
    this.products = [];
    const title = this.searchProductForm.get('title')!.value;
    this.adminService.getAllProductsByName(title).subscribe(res=>{
      res.forEach(element=>{
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element)
      })
    })

  }






















}
