import { Component, OnInit, Input } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';


@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {
  @Input() logger: MySpecialLoggerService;

  constructor() {
  }

  ngOnInit() {
  }

  captureMousePos($event: MouseEvent) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);
  }
}
