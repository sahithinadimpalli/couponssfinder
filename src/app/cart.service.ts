import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  serviceUrl:string="http://localhost:3000/cart/";
  constructor(private http:HttpClient) { }
  getToCart(){
    return this.http.get(this.serviceUrl);
  }
  addToCart(item){
    
    let addCart={id:item.id,name:item.name,price:item.price,imageurl:item.imageurl};
  
    return this.http.post(this.serviceUrl,addCart);
  
  }
  deleteFromCart(i){
    return this.http.delete(this.serviceUrl+i._id);
  }
}
