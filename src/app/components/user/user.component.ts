import { Component, OnInit } from '@angular/core';
// import { DataService }  from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  isEdit:boolean = false;
 
  constructor() { //private dataService:DataService
    console.log('User Contructor ran...!');
  }
 
  ngOnInit() {
    console.log('ngOnInit ran...!');
    this.name='Bobby';
    this.age=34;
    this.email='almuhasiba@gmail.com';
    this.address={
      street:'No 1233',
      city:'Palakkad',
      state:'Kerala'
    }
    this.hobbies=['Reading', 'Outdoor games', 'Coding', 'Listening classes'];
   
}
 
  onClick(){
    console.log('Clicked Me....');
  }
//https://www.youtube.com/watch?v=KhzGSHNhnbI
  addHobby(hobby){
    //console.log('Passed value....'+hobby);
    this.hobbies.push(hobby);
    return false;
  }
 
  deleteHobby(hobby){
    for(let i=0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}
 
interface Address{
  street:string,
  city:string,
  state:string
}