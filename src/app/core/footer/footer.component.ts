import { User } from './../user/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit{

  user$: Observable<User>
  constructor(private useService: UserService){}

  ngOnInit(): void {
    this.user$ = this.useService.getUser();
  }

}