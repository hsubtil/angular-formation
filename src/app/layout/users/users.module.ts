import { NgModule } from '@angular/core'
import { UsersComponent } from './users.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [UsersComponent]
})
export class UsersModule {}