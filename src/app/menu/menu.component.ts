import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  selectPage(value): void {
    this.router.navigate(['/page',value]);
  }

}
