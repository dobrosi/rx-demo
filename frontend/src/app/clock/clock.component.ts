import {Component, NgZone} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  time = '';
  playing = true;
  private observable = new Observable<string>(
      observer => {
        let source = new EventSource("http://localhost:8080/time-stream");
        source.onmessage = event => {
          this.zone.run(() => {
            observer.next(event.data)
          })
        }
        source.onerror = event => {
          this.zone.run(() => {
            observer.error(event)
          })
        }
      }
    );
  private sub?: Subscription;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.subscribe();
  }

  private subscribe() {
    this.sub = this.observable.subscribe({
      next: data => {
        console.log(data);
        this.time = data;
      },
      error: err => console.error(err)
    });
    this.playing = true;
  }

  private unsubscribe() {
    this.sub?.unsubscribe();
    this.playing = false;
  }

  onclick(): void {
    this.playing ? this.unsubscribe() : this.subscribe();
  }
}
