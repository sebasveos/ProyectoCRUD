import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor(){
    this.title = "Sebastián Velásquez Ospina";
    this.subtitle = "Desarrollador";
    this.email = "Sebasveos5@gmail.com";
  }
}
