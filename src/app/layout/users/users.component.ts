import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/core/models/user.class';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-users',
    styleUrls: ['./users.component.css'],
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {

    public users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
      this.getUsers()
    }

    public getUsers() {
      this.userService.getUsers().subscribe((users: User[]) => {
        this.users = users;
        console.info(`[UsersComponent] Get ${this.users.length} users`)
      })
    }

}
