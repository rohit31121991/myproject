import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  projId: number=10;
  projName: string='firstProject';


  
  showProjName(){
    this.projName='Event binding is working' + this.projName;
  }

  updateP(event: Event){
    this.projName=(<HTMLInputElement>event.target).value;
  }
}
