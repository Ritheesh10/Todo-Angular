import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title:any;
  @Input() color:any;

  @Output() btnClick = new EventEmitter()
  
  constructor(){

  }
  ngOnInit(): void {}

  onClickBtn(){
    this.btnClick.emit()
  }
}
