import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnChanges {

  @Input() TotalPage:number;
  @Output() pagingClickOutputEmitter:EventEmitter<any>=new EventEmitter()
  selectedPageNumber:number;

  constructor() { }

 ngOnChanges()
 {
 }

 counter(i: number) {
  return new Array(i);
}

onPageClick(selectedNumber:number)
{
 
 this.selectedPageNumber=selectedNumber;

}

onNextClick()
{
if(this.selectedPageNumber < this.TotalPage)
{
  this.selectedPageNumber ++;
}
console.log(this.selectedPageNumber)
}
onPrevClick()
{

  if(this.selectedPageNumber > 1)
{
  this.selectedPageNumber --;
}

console.log(this.selectedPageNumber)

}

}
