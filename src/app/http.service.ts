import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private readonly  http: HttpClient) {
  }


  postData(): any {
    let formData: FormData = new FormData();
    formData.append('username', "admin");
    formData.append('password', "123");
    return this.http.post('http://localhost:8081/user_auth/login', formData, {withCredentials: true});
  }

  deleteUser(): any {
    const orderId = 5;
    return this.http.delete(`http://localhost:8081/user_auth/${orderId}`, {withCredentials: true});
  }

  choo(): any {
    return this.http.get(`http://localhost:8081/role`, {withCredentials: true});
  }

  logout(): any {
    const body = ""
    return this.http.post(`http://localhost:8081/user_auth/logout`, body, {withCredentials: true});
  }
}
