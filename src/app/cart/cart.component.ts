import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../viewmodels/item.viewmodel';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item:any;
  constructor(private cartservice:CartService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastrservice:ToastrService) { }

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
   deleteFromCart(i){
    
    this.cartservice.deleteFromCart(i).subscribe((response)=>{
      this.getItemsFromService();
      this.showSuccess()
    })
  
}

//items: Item;
// total: number;
// ngAfterContentChecked()  {
//     this.total = this.items.reduce(
//       (runningValue: number, i) =>
//       runningValue = runningValue + (i.price), 0);
// }
// total(){
// let sum=0;
// for(var i=0;i<this.item.length;i++){
//   sum+=this.item[i].price;
// }
// return sum;
// }  
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
order(){
  
  this.item.forEach(item=>{
    item.ordervalue =0
  })
}

showSuccess() {
  // alert('successfully item deleted from cart');
  this.toastrservice.success('successfully item deleted from cart');
}

// Increment(cond,item){
//   if(cond === 'up'){
//     item.ordervalue++
//   }
//   else if(cond === 'down'){
//     if(item.ordervalue>0){
//       item.ordervalue--
//     }
//   }
// }

}
