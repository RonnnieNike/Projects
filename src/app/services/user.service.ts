import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../components/models/User'
@Injectable({
  providedIn: 'root'
})

export class UserService {
  data: Observable<any>;
  users: User[];

  constructor() {

    this.users = [
      {
        firstName: 'Mario',
        lastName: 'Rossi',
        email: 'mario@gmail.com',
        isActive: false,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',
        isActive: true,
        registered: new Date('03/11/2017 06:20:00'),
        hide: false
      },
      {
        firstName: 'Luca',
        lastName: 'Bianchi',
        email: 'luca@gmaial.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: false
      }
    ];

   }

   getUsers(): Observable<User[]> {
     return of(this.users);

   }

   addUser( user:User ) {
      this.users.unshift(user);
   }

   getData(){
     this.data = new Observable(observer =>{
        setTimeout(()=> {
          observer.next(1)
        },1000);

        setTimeout(()=> {
          observer.next(2)
        },2000);

        setTimeout(()=> {
          observer.next(3)
        },3000);



        
     });
     
     return this.data;
   }
}
