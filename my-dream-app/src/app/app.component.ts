import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  showAddUser: boolean=false; 
  showListUser: boolean=false;
  showViewUser:boolean=false;


  showAddUserFun(){
    this.showAddUser=true;
    this.showListUser =false;
    this.showViewUser=false;
  }
  showListUserFun(){
    this.showListUser=true;
    this.showAddUser=false;
    this.showViewUser=false;
  }
  showViewUserFun(){
    this.showViewUser=true;
    this.showListUser=false;
    this.showAddUser=false;
  }
}
