import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  //Recebe um valor de fora, quem usar esse component passa um parametro
  @Input() hasMoreButton: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

}
