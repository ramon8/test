import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.scss'],
})
export class LogupComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}

  
  public onLogIn():void{
    this.router.navigate(['logIn']);
  }

}
