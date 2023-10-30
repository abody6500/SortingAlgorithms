import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
@Output() changeArraySize = new EventEmitter<number>();
arraySize = 100;
  constructor() { }

  ngOnInit(): void {
  }

  changeSize(size: number) {
    this.changeArraySize.emit(size);
  }
}
