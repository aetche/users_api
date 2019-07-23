import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: [User];
  percent: number;
  constructor(
    private usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getUsersByPage(params.page);
    });
  }

  getUsersByPage(selectedPage: number): void {
    this.usuariosService.getUsersByPage(selectedPage).subscribe( users => {
      let data = users.data;
      this.users = data;
      this.calculatePercentage(this.users);
    })
  }

  calculatePercentage(users): void {
    const longUsers = users.filter(function(user){
      let characters = user.first_name.length + user.last_name.length;
      return characters > 12;
    });
    this.percent = longUsers.length / users.length;
  }
}
