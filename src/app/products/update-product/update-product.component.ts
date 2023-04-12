import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  pid:any
  pData:any

  constructor(private ps:ProductService,private ar:ActivatedRoute){

  }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data["id"]
    })

     this.ps.viewProduct(this.pid).subscribe((data:any)=>{
      this.pData=data
      
      
     })
  }
  updateProduct(form:any){
    this.ps.updateProduct(this.pid,this.pData).subscribe((item:any)=>{
      alert("Product Updated")
    })
  }
}
