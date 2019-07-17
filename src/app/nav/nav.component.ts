import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.accountService.logout();
    this.router.navigate(['/login']);  }
}
