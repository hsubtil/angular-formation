import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    title: string = 'Mon App'
    constructor() {}

    ngOnInit() { }
}
