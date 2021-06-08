import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Details } from 'src/app/model/Details';
import { FirebbaseService } from 'src/app/services/firebabse.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/serices/authentication.service';
@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.page.html',
  styleUrls: ['./editpage.page.scss'],
})
export class EditpagePage implements OnInit {
  registration_form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private fbSerice:FirebbaseService,
    public router:Router,
    private ngFireAuth:AngularFireAuth,
    public toastCtrl: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private auths:AuthenticationService,

  ) { }

  ngOnInit() {
    this.registration_form = this.formBuilder.group(
      {

        fname: new FormControl('', Validators.compose([])),
        lname: new FormControl('', Validators.compose([])),
        pnum: new FormControl('', Validators.compose([]))

      },

    );
  }
  signout(){
    this.ngFireAuth.authState.subscribe(user=>{
      if(user){

        localStorage.setItem('user',JSON.stringify(user));
      }

    })
    this.showOptions();

  }
  async showOptions() {
    const alert = await this.alertController.create({
      header: "Logout",
      message: "Choose an option below",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Declined the offer");
          },
        },
        {
          text: "Logout",
          handler: () => {
            this.auths.Signout();
            this.router.navigate(['']);
          },
        },
      ],
    });

    await alert.present();
  }
  
  update(value){
    this.fbSerice.updateProfile(value.fname, value.lname, value.pnum);
    console.log("update successfull");
    this.router.navigateByUrl('tabs/profile');
  }
  back(){
    this.router.navigate(['tabs/profile']);
  }


}
