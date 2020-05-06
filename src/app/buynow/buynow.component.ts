import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {
  item:any;
  constructor(private cartservice:CartService,private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getItemsFromService();
  }
  getItemsFromService(){
    this.cartservice.getToCart().subscribe((response)=>{
      this.item=response;
      this.item.forEach(item=>{
        item.ordervalue =0
      })
      
    })
   }
   discount:any=0;
  sum1:any=0
  distotal(){
    // let sum=0;
    // for(var i=0;i<this.item.length;i++){
    //   sum+=this.item[i].price;
    //}
    
   return this.sum1-this.discount;
    }  
    total(){
      
       let sum=0;
       for(var i=0;i<this.item.length;i++){
        sum+=this.item[i].price;
      
      }
      this.sum1=sum;
      return sum;
      }  
    
   calculateDiscount(discountCode:NgForm) {
    let value=0;
    let code=discountCode.value;
     console.log(discountCode.value.code);
      if(discountCode.value.code == 'FLAT500') {
        value=500;
      }
      
         else if(discountCode.value.code == 'FLAT300') {
          value=300;}

           else if(discountCode.value.code == 'FLAT200') {
            value=200;}
       
            else if(discountCode.value.code == 'FLAT350') {
              value=350;}
         
       // Always end this with a 0 so that a $0 discount
       // will be applied if they put the wrong code
       else{ value=0}
       this.discount=value;
       return value
       }

      
}
