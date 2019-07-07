import { Component, OnInit } from '@angular/core';

import { User } from '../../components/models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    email:''
 
}
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm:boolean= false;


  constructor() { }

  ngOnInit() {
   
      this.users = [
        {
          firstName: 'Marco',
          lastName: 'Rossi',
          age: 30,
          email:'Marco@gmail.com',
          // image: 'http://lorempixel.com/600/600/people/5 ',
          isActive: true,
          registered: new Date('01/02/2018 08:30:45'),
          hide: true
        },
        {
          firstName: 'Luca ',
          lastName: 'Bianchi',
          age: 34,
          email:'luca@gmail.com',
          isActive: false,
          registered: new Date('01/11/2016 18:30:45'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          email:'Karen@gmail.com',
          isActive: true,
          registered: new Date('01/04/2015 08:30:45'),
          hide: true
        }
      ];

      this.loaded = true;

 
      /*this.setCurrentClasses();
      this.setCurrentStyles();*/
  }



  onSubmit(){

    
  }
}











 /*  

   addUser() {
    this.user.isActive=true;
    this.user.registered= new Date();

    this.users.unshift(this.user);

    this.user ={

      firstName: '',
      lastName: '',
      age: null,
      email:''

    }
  }



  fireEvent(e){
    console.log(e.type);
    console.log(e.target.value);
  }
 toggleHide(user: User){
    user.hide = !user.hide ;
  }


 setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

*/  


