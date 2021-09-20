import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.class';
import { UserService } from 'src/app/core/services/user.service';
import { UserCardComponent } from './user-card.component';

describe('UsersCardComponent', () => {
  let fixture: ComponentFixture<UserCardComponent>
  let component: UserCardComponent

  let user: User

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardComponent],
    }).compileComponents()
  })

  beforeEach(async () => {
    fixture = TestBed.createComponent(UserCardComponent)
    component = fixture.componentInstance;

    user = {
      id: 1,
      name: 'Test',
      email: 'test@test.com',
      username: 'toto',
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }
    component.user = user
    await fixture.whenStable() // Wait for ngOnInit
    fixture.detectChanges() // For html elements, update Template
  })

  it('name should be Test', async () => {
    expect(component.user.name).toEqual('Test')
  })

  it('should be user Test', async () => {
    expect(component.user).toEqual(user)
  })

})
