import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-message-signup',
  templateUrl: './message-signup.component.html'
})
export class MessageSignupComponent{

  @Input() text: string = '';

}