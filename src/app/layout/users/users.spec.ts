import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UsersComponent } from './users.component'
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.class';
import { UserService } from 'src/app/core/services/user.service';

describe('UserComponent', () => {
  let fixture: ComponentFixture<UsersComponent>
  let component: UsersComponent
  let template: HTMLElement

  class UserServiceMock {
    public getUsers() : Observable<User[]> {
      return of([{
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
      }, {
        id: 2,
        name: 'Test2 2',
        email: 'test2@test.com',
        username: 'toto tata',
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
      }])
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientModule],
      providers: [{
        useClass: UserServiceMock,
        provide: UserService
      }]
    }).compileComponents()
  })

  beforeEach(async () => {
    fixture = TestBed.createComponent(UsersComponent)
    fixture.detectChanges() // For TS usage, call ngOnInit
    await fixture.whenStable() // Wait for ngOnInit
    fixture.detectChanges() // For html elements, update Template
    component = fixture.componentInstance
    template = fixture.nativeElement
  })

  it('should contain 10 users', async () => {
    expect(component.users.length).toEqual(2)
  })

  it('HTML content should contain 10 users', async () => {
    const cards = template.querySelectorAll('.card')
    expect(cards.length).toEqual(component.users.length)
  })
})
