import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    // Uploaded File URL
    UploadedFileURL: Observable<string>;
 
    //Uploaded Image List
    images: Observable<MyData[]>;
  
    //File details  
    fileName:string;
    fileSize:number;

    private imageCollection: AngularFirestoreCollection<MyData>;
  

  constructor(private storage: AngularFireStorage, public formBuilder: FormBuilder,private database: AngularFirestore) { 
      this.imageCollection = database.collection<MyData>('freakyImages');
      this.images = this.imageCollection.valueChanges();
  }

  ngOnInit() {
  }

}
