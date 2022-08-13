import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { list } from '../module/imges';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-each-photo',
  templateUrl: './each-photo.component.html',
  styleUrls: ['./each-photo.component.css']
})
export class EachPhotoComponent implements OnInit{

 @Input() data:list;
 @Output() spacific_element_to_parent =new EventEmitter<list>();
 products:list[]=[];

 quantity_val:number=1;
 
  constructor(private each:ServicesService) {
    this.data={
      imagesrc:"",
      price:1,
      quantity:1,
      check:0
    }
  }
  
  ngOnInit(): void {
   
  }
  //this function is pushing photo that has clicked by customer
  sendToDetails():void{  
    this.data.quantity =this.quantity_val;
    this.each.data_in_use=this.data;
  }

  add_to_cart(post:list):void{
    this.data.quantity=this.quantity_val;
    this.each.save_quantity=this.data.quantity;
    this.spacific_element_to_parent.emit(this.data);
  }
}
