import { AuthService } from 'src/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private router: Router, private authServ: AuthService) {}


  ngOnInit(): void {
  }
  
  redirect() {
    if (!this.authServ.isAuthenticated()) {
      alert("You cannot access on this page without permission")
      this.router.navigateByUrl("/sign");
    }else{
      this.router.navigate(['game-page']);
    }
  }
}
