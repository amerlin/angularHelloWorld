import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/user';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  @Input() user: User;

  ngOnInit() {
  }

}
