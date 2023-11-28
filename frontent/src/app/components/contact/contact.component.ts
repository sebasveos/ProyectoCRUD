import { Component, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public widthSlider: any;
  public anchuraToSlider: any;
  public autor: any;
  @ViewChild('textos', {static: true}) textos: any;

  ngOnInit(){
    var opcion_clasica = document.querySelector('#texto')?.innerHTML;
    //console.log(this.textos.nativeElement.textContent);
  }

  cargarSlider() {
    this.anchuraToSlider = this.widthSlider;
  }

  getAutor1(event:any){
    this.autor = event;
  }
}
