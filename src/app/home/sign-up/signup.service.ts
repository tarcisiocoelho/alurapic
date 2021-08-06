import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { NewUser } from './new-user';

const API_URL = "http://localhost:3000"

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient){}

  checkUserNameTaken(userName: string){
    return this.http.get(API_URL + '/user/exists/' + userName);

  }

  signupService(newUser: NewUser){
    return this.http.post(API_URL + '/user/signup', newUser)
  }
}