import {Injectable} from "@angular/core";
import {User} from "../../models";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.baseUrl}/users`);
  }

  register(user: User) {
    return this.http.post(`${environment.baseUrl}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.baseUrl}/users/${id}`);
  }
}
