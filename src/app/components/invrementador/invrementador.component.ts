import { Component, OnInit, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';




@Component({
  selector: 'app-invrementador',
  templateUrl: './invrementador.component.html',
  styles: []
})
export class InvrementadorComponent implements OnInit {


  @ViewChild('txtprogreso') txtProgress: ElementRef;
  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda'; // se puede utilizar otro nombre en vez del nombre de la variable,
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();




  constructor() { }


  ngOnInit() {
  }

  OnChange(newValue: number) {

  //  let elemhtml: any = document.getElementsByName('progreso')[0];

    //console.log(elemhtml);

    if (newValue == null) {
      this.progreso = 0;
    }
    if (newValue >= 100) {
      this.progreso = 100;
    }
    if (newValue <= 0) {
      this.progreso = 0;
    }

    //elemhtml.value = Number(this.progreso);

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

  }

  cambiarValor(valor) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
        this.progreso =  this.progreso + valor ;

        this.cambioValor.emit(this.progreso);


  }

}
