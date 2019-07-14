import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service'
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
    email: ''
  }
  users: User[];
  showExtended: boolean =false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  data:any;
  
  @ViewChild('userForm',{static:false})form: any; //@decorator

  constructor(private _dataService: UserService) { // _ per classi private

  }

  ngOnInit() {
    this._dataService.getData().subscribe(data =>{
      console.log(data);
    });

    this._dataService.getUsers().subscribe(users=> {
      this.users=users;
      this.loaded = true;

    });

    
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      value.isActive = false;
      value.registered = new Date();
      value.hide = true;

      this._dataService.addUser(value);

      this.form.reset();
    }
  }

  
}
