import {Component} from '@angular/core'

import {User} from './user'
import {HttpService} from "./http.service";

@Component({
  selector: 'my-app',
  template: `
    <div class="form-group">
      <label>Введите имя:</label>
      <input [(ngModel)]="name" placeholder="name"/>
      <h1>Добро пожаловать {{ name }}!</h1>

    </div>
    <button
      (click)="createUser()"
    >
      LOGIN
    </button>
    <button
      (click)="deleteUser()"
    >
      delete
    </button>
    <button
      (click)="choo()"
    >
      choo
    </button>
    <button
      (click)="logout()"
    >
      logout
    </button>
  `,
  providers: [HttpService],
})
export class AppComponent {
  name = ''

  constructor(private readonly  httpService: HttpService) {
  }

  createUser() {

    this.httpService.postData().subscribe(
      (data: any) => {
        console.log(data)
      },
      (Error: any) => {
        console.log(Error)
      })
  }

  deleteUser() {

    this.httpService.deleteUser().subscribe(
      (data: any) => {
        console.log(data)
      },
      (Error: any) => {
        console.log(Error)
      })
  }

  choo() {

    this.httpService.choo().subscribe(
      (data: any) => {
        console.log(data)
      },
      (Error: any) => {
        console.log(Error)
      })
  }

  logout() {

    this.httpService.logout().subscribe(
      (data: any) => {
        console.log(data)
      },
      (Error: any) => {
        console.log(Error)
      })
  }

  // submit( ) {
  //   this.httpService.postData().subscribe(
  //
  //     (error) => console.log(error)
  //   )
  // }
}
