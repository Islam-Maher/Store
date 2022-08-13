import { Component, OnInit,Input } from '@angular/core';
import { list } from '../module/imges';
import { ServicesService } from '../services.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  taken_data:list;
  new_quantity:number;
  product_info:string;
  constructor(private item:ServicesService) {
    this.taken_data={
      check:0,
      price:0,
      imagesrc:"",
      quantity:1
    }
    this.new_quantity=1;
    this.product_info='';
  }

ngOnInit() {
  this.taken_data= this.item.data_in_use;
  this.new_quantity=this.taken_data.quantity
  this.info()
}
//function should put in service file
save_data(){
this.taken_data.quantity=this.new_quantity;
this.item.data_putchased.push(this.taken_data);
console.log(this.taken_data);
alert("The product has been added");
}

info(){
  if(this.taken_data.check<=3){
    this.product_info="Use to cary things and move aroud the town";
  }
  else if(this.taken_data.check<=7){
    this.product_info="Book";
  }
  else if(this.taken_data.check<=10){
    this.product_info="Camera used to take photos";
  }
  else if(this.taken_data.check<=13){
    this.product_info="Sun glasses :protect your eay from sun rays";
  }
  else if(this.taken_data.check<=17){
    this.product_info="handsfree : hear music";
  }
  else {
    this.product_info="comfortable Shoos";
  }
  
}
 
}
