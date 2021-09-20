import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/app/core/models/user.class';

@Component({
    selector: 'app-user-card',
    styleUrls: ['./user-card.component.css'],
    templateUrl: 'user-card.component.html'
})
export class UserCardComponent implements OnInit {

    @Input() public user?: User;

    constructor() { }

    ngOnInit() {
      // console.log(`[UserCard] ${this.user.name}`)
    }

}
