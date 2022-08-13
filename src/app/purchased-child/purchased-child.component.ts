import { ServicesService } from '../services.service';
import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { list } from '../module/imges';
@Component({
  selector: 'app-purchased-child',
  templateUrl: './purchased-child.component.html',
  styleUrls: ['./purchased-child.component.css']
})
export class PurchasedChildComponent implements OnInit {
@Input() post:list;
@Input() price:number;
@Output() remove_post =new EventEmitter<list>();
@Output() send_new_quantity =new EventEmitter<number>();
@Output() filter=new EventEmitter<list>();
updated_amount:number=1;
post_qun:number=0;
pre_qun:number=0;
  constructor(private element:ServicesService) { 
    this.post={
      imagesrc:"",
      price:1,
      quantity:1,
      check:0
    }
    this.price=0;
  }

  ngOnInit(): void {
    this.updated_amount= this.post.quantity;
    this.pre_qun=this.post.quantity;
  }

  remove_from_cart(){
    this.remove_post.emit(this.post)
  }

 //---------------------------------
  send(the_event:number)
  {
    this.post_qun=the_event;
    let x=this.post_qun-this.pre_qun;
    let final_price=this.price;
    alert("your process has been saved");
    if(x==0){
      return;
    }
    else if(x>0){
      final_price+=x*this.post.price;
    }
    else{
      final_price+=x*this.post.price;
    }
    this.pre_qun=this.post_qun;
    this.send_new_quantity.emit(final_price);
    this.post.quantity=this.post_qun;
  }

}
