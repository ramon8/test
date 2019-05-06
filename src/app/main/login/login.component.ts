import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  public onForgetPassword():void{
    this.router.navigate(['forgotPassword']);
  }

  public onLogIn():void{
    this.router.navigate(['forgotPassword']);
  }

  public onLogUp():void{
    this.router.navigate(['logUp']);
  }

}
