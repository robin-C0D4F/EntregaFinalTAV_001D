import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private emailPattern : any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  private passPattern : any = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

  credentials: FormGroup = new FormGroup({
    email: new FormControl(''),
    password : new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.credentials = this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password: ['',[Validators.required,Validators.pattern(this.passPattern)]]
    });
  }

  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  get f(): {[key:string]: AbstractControl} {
    return this.credentials.controls;
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value.email, this.credentials.value.password);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home');
    }
    else{
      this.alertPresent('Login fallido','Inténtelo más rato!!');
    }
  }

  async register(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const user = await this.authService.register(this.credentials.value.email, this.credentials.value.password);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home');
    }
    else{
      this.alertPresent('registro fallido','Inténtelo más rato!!');
    }
  }

  async alertPresent(header:string, message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['Ok'],
    });
    await alert.present();
  }



}
