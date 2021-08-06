import { PlataformDetectorService } from './../../core/plataform-detector/plataform-detector.service';
import { UserNotTakenValidadorService } from './user-not-taken.validador.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case-validator";
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  providers: [UserNotTakenValidadorService]
})
export class SignUpComponent implements OnInit, AfterViewInit{

  signupForm: FormGroup;
  text: string = ''
  msgSuccess: boolean = false;
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder, private userNotTakenValidatorService: UserNotTakenValidadorService, private signUpService: SignUpService, private router: Router, private platformDetectorService: PlataformDetectorService) {}

  ngAfterViewInit(): void {
    if(this.platformDetectorService.isPlatformBrowser()){
      this.inputEmail.nativeElement.focus();
    }
  }

  ngOnInit(): void {
    this.userNotTakenValidatorService.checkUserNameTaken();
    this.signupForm = this.formBuilder.group({
      email: ['',
      [
        Validators.required,
        Validators.email,
      ]
    ],
      fullName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]
    ],
      userName: ['',
      [
        Validators.required,
        lowerCaseValidator,
        Validators.minLength(2),
        Validators.maxLength(30),
      ],
      this.userNotTakenValidatorService.checkUserNameTaken()
    ],
      password: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(14)
      ]
    ]
    })
  }

  signup(){
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService.signupService(newUser)
    .subscribe(() => {
      this.text = "Registrado com sucesso!"
      this.msgSuccess = true;
      setTimeout(() => {
        this.router.navigate([''])
      }, 1000)
    },
    error => {
      console.log(error);
    })
  }
}