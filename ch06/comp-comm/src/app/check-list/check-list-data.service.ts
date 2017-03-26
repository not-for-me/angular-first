import { Injectable } from '@angular/core';

@Injectable()
export class CheckListDataService {
  totalCnt;
  curCnt;

  constructor() {
    this.initCount(0);
  }

  initCount(total) {
    this.totalCnt = total;
    this.curCnt = 0;
  }

  changeTotalCntByOp(op: string) {
    if (op === '+') {
      this.totalCnt++;
    } else if (op === '-') {
      this.totalCnt--;
    }

    return this.totalCnt;
  }

  changeCurCntBy(isIncrease: boolean) {
    if (isIncrease) {
      this.curCnt++;
    } else {
      this.curCnt--;
    }
  }

  getCheckedItemRatioText() {
    const roundedRatio = Math.round((this.curCnt / this.totalCnt) * 100);
    return `${roundedRatio}%`;
  }
}
