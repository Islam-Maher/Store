import { Component, OnInit } from '@angular/core';
import { list } from '../module/imges';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  images:list[]=[];
  new_list:list[]=[];
  constructor(private posts:ServicesService) { 
  
  }

  ngOnInit(): void {
   this.posts.getPosts().subscribe(res =>{
   this.images=res;
  });

  }

//function for save the item in putchased component 
  save_data(the_post:list){
    this.new_list.push(this.images.filter(x=> x.check ==the_post.check)[0]);
    this.posts.data_putchased=this.new_list;
    alert("It has been added to cart");
  }
 

}
