import { Component, OnInit } from '@angular/core';
import { list } from '../module/imges';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.component.html',
  styleUrls: ['./purchased.component.css']
})
export class PurchasedComponent implements OnInit {

  data:list[]=[];
  all_data:list[]=[];
  name:string='';
  address:string='';
  credit_num:number=1234;
  total_value:number;
  updated_amount:number;

  constructor(private element:ServicesService) { 
    this.updated_amount=1;
    this.total_value=0;

  }

  select(list_array:list[]):number{
    let index;
    for (index = 0; index < list_array.length; index++) {
      if(list_array[index]==this.all_data[index]){
      break
      }
    }
    return index;
  }

  add_total(){
    for(let i=0;i<=this.data.length;i++)
    {
    this.total_value+= this.data[i].quantity*this.data[i].price;
    }
  }
  ngOnInit(): void {
    this.filter_data();
    this.data=this.element.data_putchased; 
    this.element.getPosts().subscribe(res=>{this.all_data=res});
    this.add_total();
    
  }
  
  remove_from_cart(removed_post:list){
    let x= this.data.indexOf(removed_post);
    this.total_value-=removed_post.quantity*removed_post.price;
    alert("Item has removed")
    this.data.splice(x,1);
  }
  calc_price(last_quantity:number){
   this.total_value=last_quantity;
  }
  filter_data(){
    let count=0;
   for(let i=0 ;i<=this.element.data_putchased.length;i++){
    for(let j=0 ;j<=this.element.data_putchased.length;j++){
       if(this.element.data_putchased[j]==this.element.data_putchased[i]){
       count++;
       console.log(count);
       }
       if(count>1){
        this.element.data_putchased[j].quantity=count;
       this.element.data_putchased.splice(j,1);
      }
    }
    count=0;
   }

  }
  
  submitForm(){
    this.element.customer_name=this.name;
  }
  
}
