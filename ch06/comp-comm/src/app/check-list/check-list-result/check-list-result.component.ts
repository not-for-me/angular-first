import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemEvent } from '../item-event';

interface CheckedItem {
  idx: number;
  content: string;
}

@Component({
  selector: 'cc-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {
  _checkedData: CheckedItem[];
  checkedCnt: number;
  @Output() onSelectedToRemoveItem = new EventEmitter<number>();

  constructor() {
    this._checkedData = [];
  }

  ngOnInit() { }

  @Input()
  set itemEvent(curItemEvent: ItemEvent) {
    if (curItemEvent) {
      if (curItemEvent.isChecked) {
        this._checkedData.push(curItemEvent);
      } else {
        this._checkedData = this._checkedData.filter(val => val.idx !== curItemEvent.idx);
      }
      this.checkedCnt = this._checkedData.length;
    }
  }

  onRemove(idx) {
    this.onSelectedToRemoveItem.emit(this._checkedData[idx].idx);
    this._checkedData = this._checkedData.filter((val, _idx) => _idx !== idx);
  }
}
