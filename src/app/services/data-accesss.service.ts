import { Injectable } from '@angular/core';
import { AngularFireModule} from '@angular/fire'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { environment} from 'src/environments/environment'
import {AngularFirestore} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class DataAccesssService {

  constructor() { }
}
