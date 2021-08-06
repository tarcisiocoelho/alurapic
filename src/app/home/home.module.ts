import { SignUpService } from './sign-up/signup.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { MessageSignUpModule } from './../shared/components/message-signup/message-signup.module';
import { SignUpComponent } from './sign-up/sign-up.componente';
import { Router, RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    MessageSignUpModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [SignUpService]
})
export class HomeModule {}