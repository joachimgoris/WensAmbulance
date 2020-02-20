import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(username: string, password: string): void {

  }

  register(username: string): void {

  }

  registerComplete(firstnameR: string, lastnameR: string, usernameR: string, emailR: string, passwordR: string, passwordRNotSend: string) {

  }

}
