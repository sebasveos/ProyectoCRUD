import { Component, Input, Output, EventEmitter} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() anchura: number = 0;
  @Output() getAutor = new EventEmitter();
  
  public autor: any;

  constructor(){
    this.autor = {
      nombre: "Sebastian",
      edad: 22,
      nf: 5
    };
  }

  ngOnInit(): void{
    $("#logo").click(function(e:any){
      e.preventDefault();
      $("header").css("background", "orange");              
    });
    
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: this.anchura
    });
  }

  lanzar(event:any){
    this.getAutor.emit(this.autor);
  }
}
