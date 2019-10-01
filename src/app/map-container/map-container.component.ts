import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {

  //Drag and drop arrays
  starterList = [ 'HS' ];

  dropArea1 = [];
  dropArea2 = [];
  dropArea3 = [];
  dropArea4 = [];
  dropArea5 = [];
  dropArea6 = [];
  dropArea7 = [];
  dropArea8 = [];
  dropArea9 = [];
  dropArea10 = [];
  dropArea11 = [];
  dropArea12 = [];
  dropArea13 = [];

  dropAreas = [this.dropArea1,
              this.dropArea2,
              this.dropArea3,
              this.dropArea4,
              this.dropArea5,
              this.dropArea6, 
              this.dropArea7,
              this.dropArea8,
              this.dropArea9,
              this.dropArea10,
              this.dropArea11,
              this.dropArea12,
              this.dropArea13
            ];
  


  drop(event: CdkDragDrop<string[]>)
  {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  /** Do not allow manual return. */
  noReturnPredicate() {
    return false;
  }


  constructor() { }

  ngOnInit() {
  }

}
