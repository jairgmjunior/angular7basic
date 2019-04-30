import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  title = "Primeiro Card"

  person = {
    firstName: "jair",
    lastName: "Junior",
    age : 25,
    eddress : "Rua 21"
  }

  constructor() { }

  ngOnInit() {
  }

}
