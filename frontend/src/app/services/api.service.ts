import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private _apiURL = environment.apiUrl;
    private optionsWithCredentials = { withCredentials: true };
    private optionsWithJSON = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true };

    constructor(private http: HttpClient) { }

    /**
     * LOGIN + LOGOUT
     */

    login(volunteer: User): Observable<boolean> {
        const url = `${this._apiURL}/login`;

        const body = {
            username: volunteer.username,
            password: volunteer.password
        };

        return this.http.post<boolean>(url, body, this.optionsWithCredentials);
    }

    loggedin(): Observable<boolean> {
        const url = `${this._apiURL}/loggedin`;

        return this.http.get<boolean>(url, this.optionsWithCredentials);
    }

    logout(): Observable<boolean> {
        const url = `${this._apiURL}/logout`;

        return this.http.post<boolean>(url, {}, this.optionsWithCredentials);
    }

    getUser(id: string): Observable<User> {
      const url = `${this._apiURL}/volunteers/${id}`;

      return this.http.get<User>(url, this.optionsWithCredentials);
    }

    getAllUser(): Observable<User[]> {
      const url = `${this._apiURL}/volunteers`;

      return this.http.get<User[]>(url, this.optionsWithCredentials);
    }

    modifyUser(user: User): Observable<any> {
      const url = `${this._apiURL}/volunteers`;

      return this.http.put(url, user, this.optionsWithCredentials);
    }

    deleteUser(id: string): Observable<any> {
      const url = `${this._apiURL}/volunteers/${id}`;

      return this.http.delete(url, this.optionsWithCredentials);
    }
}
