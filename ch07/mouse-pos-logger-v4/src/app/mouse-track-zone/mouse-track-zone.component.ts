import { Component, OnInit, Host, Optional, ViewEncapsulation } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';
import { LOG_LEVEL_TOKEN } from '../app.tokens';
import { LoggerService } from '../logger-service';
import { AnotherLoggerService } from '../another-logger.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  // providers: [MySpecialLoggerService, { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG }]
  encapsulation: ViewEncapsulation.Native
})
export class MouseTrackZoneComponent implements OnInit {
  logger: LoggerService;
  moveSubject: Subject<MouseEvent> = new Subject<MouseEvent>();
  move$: Observable<MouseEvent> = this.moveSubject.asObservable();


  constructor(
    @Host() @Optional() mySpecialLogger: MySpecialLoggerService,
    anotherLogger: AnotherLoggerService
  ) {
    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
  }
  ngOnInit() {
    this.move$
      .throttleTime(1000)
      .map(evt => [evt.clientX, evt.clientY])
      .subscribe(pos => this.logger.info(`x:${pos[0]} y:${pos[1]}`));
  }

  captureMousePos($event: MouseEvent) {
    this.logger.debug('click event occured');
    this.moveSubject.next($event);
  }
}
