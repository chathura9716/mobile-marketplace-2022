import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Note } from 'src/app/model/Note';
import { AuthenticationService } from 'src/app/serices/authentication.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { FirebbaseService } from 'src/app/services/firebabse.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  public notes:Observable<Note[]>;
  public backupnote:Observable<Note[]>;
  today:number=  Date.now();
  public time;
  public noteList: any[];
  public noteListBackup: any[];
  filterTerm: string;
  constructor(
    private auths:AuthenticationService,
    private router:Router,
    private ngFireAuth:AngularFireAuth,
    private fbSerice:FirebbaseService,
              private fbauth:AuthenticateService,
              private firestore: AngularFirestore,
              public alertController: AlertController
  ){
    setInterval(() => {
      this.time = new Date();
   }, 1000);
  }

  ngOnInit() {
    this.fbSerice.ngOnInit();

    this.notes=this.fbSerice.getmyNotes();
    console.log("my listing loadeed");
  }
  signout(){


    this.showOptions();

  }
  gotoaddNote(){
    this.router.navigate(['home']);
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


}
