import {Injectable, EventEmitter} from "@angular/core";


@Injectable()
export class EventEmitterService {
  private eventEmitter = new EventEmitter<string>();

  constructor() {
  }

  public pushChange(handle: string): void {
    this.eventEmitter.emit(handle);
  }

  public listenChange(handle: string): void {
    console.log(this.eventEmitter);
  }

}
