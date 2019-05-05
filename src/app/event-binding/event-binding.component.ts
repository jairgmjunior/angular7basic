import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  btnName = "My Button";
  i = 0;
  spinnerMode = "determinate";
  btnEnable = true;
  modifica = 0;

  constructor() { }

  ngOnInit() {
    this.initButton();
  }

  initButton(){
    this.btnName = "it was clicked " + this.i + " times";
  }

  save(){
    alert("click");
  }

  increment(){    
    this.modifica = this.i++;
    this.initButton();

    if(this.i == 100) this.i = 0;
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }
}
