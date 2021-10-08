import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //to expose the cache of messages
  messages: string[] = [];

  //to add a message to array of strings
  add(message: string){
    this.messages.push(message);
  }
  //clear out the array of messages
  clear() {
    this.messages = [];
  }

}
