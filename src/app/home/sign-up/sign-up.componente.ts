import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit{

  signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
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
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[a-z_0-9_\-]+$/),
        ]
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
}