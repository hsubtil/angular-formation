import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/core/services/models/user.class';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {

    public users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
      this.getUsers()
    }

    public getUsers() {
      this.userService.getUsers().subscribe((users) => {
        this.users = users;
        console.log(`Get ${this.users.length} users`)
      })
    }

}