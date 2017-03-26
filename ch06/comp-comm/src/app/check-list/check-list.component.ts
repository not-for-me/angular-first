import { Component, OnInit } from '@angular/core';
import { CheckListDataService } from './check-list-data.service';
import { ItemEvent } from './item-event';

@Component({
  selector: 'cc-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  totalItemCnt: number = 4;
  checkList: string[] = [];
  checkedResult: boolean[] = [];
  curItemEvent: ItemEvent;

  constructor(public checkListDataService: CheckListDataService) {
    this.checkListDataService.initCount(this.totalItemCnt);

    for (let i = 1; i <= this.totalItemCnt; i++) {
      this.checkList.push(`check list ${i}`);
    }
    this.checkList.forEach(() => this.checkedResult.push(false));
  }

  ngOnInit() { }

  onChangeCnt(op: string) {
    const changedTotalCnt = this.checkListDataService.changeTotalCntByOp(op);
    if (op === '+') {
      this.checkList.push(`check list ${changedTotalCnt}`);
      this.checkedResult.push(false);
    } else if (op === '-') {
      this.checkList.pop();
      this.checkedResult.pop();
    }
    this.totalItemCnt = changedTotalCnt;
  }

  onChecked($event, idx: number) {
    this.curItemEvent = { idx: idx, content: this.checkList[idx], isChecked: $event.target.checked };
    this.checkListDataService.changeCurCntBy(this.curItemEvent.isChecked);
  }

  removeCheckedItem(idx) {
    this.checkedResult[idx] = false;
    this.checkListDataService.curCnt--;
  }
}
