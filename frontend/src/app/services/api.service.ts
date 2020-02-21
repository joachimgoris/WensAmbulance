import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import {Patient} from '../models/patient.model';
import {Wish} from '../models/wish.model';

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

    login(username: string, password: string): Observable<boolean> {
        const url = `${this._apiURL}/Authentication/login`;

        const body = {
            email: username,
            password: password
        };

        return this.http.post<boolean>(url, body, this.optionsWithCredentials);
    }

    register(user: User): Observable<any> {
      const url = `${this._apiURL}/Authentication/register`;

      return this.http.post<any>(url, user, this.optionsWithCredentials);
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
      const url = `${this._apiURL}/Volunteer/${id}`;

      return this.http.get<User>(url, this.optionsWithCredentials);
    }

    getAllUser(): Observable<User[]> {
      const url = `${this._apiURL}/Volunteer`;

      return this.http.get<User[]>(url, this.optionsWithCredentials);
    }

    modifyUser(user: User): Observable<any> {
      const url = `${this._apiURL}/Volunteer`;
      console.log(user);
      return this.http.put(url, user, this.optionsWithCredentials);
    }

    deleteUser(id: string): Observable<any> {
      const url = `${this._apiURL}/Volunteer/${id}`;

      return this.http.delete(url, this.optionsWithCredentials);
    }

    getAllPatients(): Observable<Patient[]> {
      const url = `${this._apiURL}/Patient`;

      return this.http.get<Patient[]>(url, this.optionsWithCredentials);
    }

    getPatient(id: string): Observable<Patient> {
      const url = `${this._apiURL}/Patient/${id}`;

      return this.http.get<Patient>(url, this.optionsWithCredentials);
    }

    addPatient(patient: Patient): Observable<any> {
      const url = `${this._apiURL}/Patient`;

      return this.http.post<any>(url, patient, this.optionsWithCredentials);
    }

    modifyPatient(patient: Patient): Observable<any> {
      const url = `${this._apiURL}/Patient/${patient.id}`;

      return this.http.put<any>(url, patient, this.optionsWithCredentials);
    }

    deletePatient(patient: Patient): Observable<any> {
      const url = `${this._apiURL}/Patient`;

      return this.http.delete<any>(url, this.optionsWithCredentials);
    }

    getAllWishes(): Observable<Wish[]> {
      const url = `${this._apiURL}/Wish`;

      return this.http.get<Wish[]>(url, this.optionsWithCredentials);
    }

    getAllWishesCensored(): Observable<Wish[]> {
      const url = `${this._apiURL}/Wish/censored`;

      return this.http.get<Wish[]>(url, this.optionsWithCredentials);
    }

    addWish(wish: Wish): Observable<any> {
      const url = `${this._apiURL}/Wish`;

      return this.http.post<any>(url, wish, this.optionsWithCredentials);
    }

    modifyWish(wish: Wish): Observable<any> {
      const url = `${this._apiURL}/Wish/${wish.id}`;

      return this.http.put<any>(url, wish, this.optionsWithCredentials);
    }

    deleteWish(wish: Wish): Observable<any> {
      const url = `${this._apiURL}/Wish`;

      return this.http.delete<any>(url, this.optionsWithCredentials);
    }

    getWish(id: string): Observable<Wish> {
      const url = `${this._apiURL}/Wish/${id}`;

      return this.http.get<Wish>(url, this.optionsWithCredentials);
    }
}
