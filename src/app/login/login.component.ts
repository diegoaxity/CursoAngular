import { Component, OnInit } from '@angular/core';
import { ConsumeService } from '../services/consume.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateMail } from '../validators/email.validator';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  amount = 12346;

  constructor(private consumeService: ConsumeService, private fb: FormBuilder, private dataService: DataService) {
    this.formLogin = this.fb.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.formLogin.value);

    this.dataService.setIsLoading(true);
    this.consumeService.login(this.formLogin.value).subscribe(res => {
    }, err => {
      this.dataService.setIsLoading(false);
    }, () => {
      this.dataService.setIsLoading(false);
    });
  }
}
