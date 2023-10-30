import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SortingAlgorithms';
  columnsArray: number [] = [];

  constructor(private router: Router) {

  }
 ngOnInit() {
  this.renderColumns(100);
 }
 renderColumns(arraySize: number) {
    console.log(arraySize);
    for(let column =0; column < arraySize; column++) {
      this.columnsArray.push(this.generateRandomNumbers(5, 500));
    }
 }

 generateRandomNumbers(min: number,max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

  changeArraySize(size: number) {
    this.columnsArray = [];
    this.renderColumns(size);
  }
}
