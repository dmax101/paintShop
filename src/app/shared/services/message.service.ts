import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IMessage {
  hidden: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
  message: String;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private static message$ = new BehaviorSubject<IMessage>({
    hidden: true,
    type: 'info',
    message: 'message system',
  });

  constructor() {}

  public static setMessage(message: IMessage) {
    this.message$.next(message);

    setInterval(() => {
      let newMessage = {
        ...message,
        hidden: true,
      };

      this.message$.next(newMessage);
    }, 15000);
  }

  public static getMessage(): Observable<IMessage> {
    return this.message$.asObservable();
  }
}
