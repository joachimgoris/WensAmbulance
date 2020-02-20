import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {ApiService} from '../../services/api.service';
import { TokenInformationService } from 'src/app/services/token-information.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(private apiService: ApiService, private tokenInformationService: TokenInformationService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('@email.com', [Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
      address: new FormControl('', [Validators.required]),
      ssn: new FormControl('', [Validators.required]),
      certificate: new FormControl('', [Validators.required]),
      medicalScreening: new FormControl('', [Validators.required]),
      badgeNumber: new FormControl('', [Validators.required]),
      badgeExpirationDate: new FormControl('', [Validators.required]),
      shirtSize: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    const user = new User();
    user.username = this.userForm.get('username').value;
    user.firstname = this.userForm.get('firstname').value;
    user.lastname = this.userForm.get('lastname').value;
    user.password = this.userForm.get('password').value;
    user.email = this.userForm.get('email').value;
    user.address = this.userForm.get('address').value;
    user.ssn = this.userForm.get('ssn').value;
    user.certificate = this.userForm.get('certificate').value;
    user.medicalScreening = this.userForm.get('medicalScreening').value;
    user.badgeNumber = this.userForm.get('badgeNumber').value;
    user.badgeExpirationDate = this.userForm.get('badgeExpirationDate').value;
    user.shirtSize = this.userForm.get('shirtSize').value;
    console.log(user);
    this.apiService.register(user).subscribe((value) => {
      console.log('User saved!');
    }, (error) => {
      console.log(error.message);
    });
  }

  login(username: string, password: string): void {
    this.apiService.login(username, password).subscribe((value) => {
      
      let authenticationToken: string = value['signinToken'];
      
      if(authenticationToken == null){
        console.log("Something's fishy");
        return;
      }

      sessionStorage.setItem('Token', authenticationToken);
      //TODO navigate to dashboard
      
    }, (error) => {
      console.log(error.message);
    });
  }

}
