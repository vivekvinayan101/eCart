import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import behaviour subject class.
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //object creation for behaviour subject
  Search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  //api call to view all products

  viewAllProducts(){
    return this.http.get('http://localhost:3000/products')
    
  }

  // api call to view single product
  viewProduct(productId:any){

    return this.http.get('http://localhost:3000/products/'+productId)

  }

  deleteProduct(productId:any){
    return this.http.delete('http://localhost:3000/products/'+productId)
  }

  //api call to add new product
  addNewProduct(productData:any){
    return this.http.post('http://localhost:3000/products',productData)
  }

  //api call to update product
  updateProduct(productId:any,productData:any){
    return this.http.put('http://localhost:3000/products/'+productId,productData)

  } 
}
