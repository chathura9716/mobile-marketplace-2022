import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';

export class TODO {
  $key: string;
  title: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  setEmailVerfied(hasVerifiedEmail: boolean, uid: any, currentUser: any) {
    throw new Error('Method not implemented.');
  }
 
 
  userData;
  constructor(Router,private ngFirestore:AngularFirestore,private ngFireAuth:AngularFireAuth,private router:Router,public afStore:AngularFirestore) { 
      this.ngFireAuth.authState.subscribe(user=>{
        if(user){
          this.userData =user;
          localStorage.setItem('user',JSON.stringify(this.userData))
        }
        else{
          localStorage.setItem('user',null);
        }
      })
  }
  SignIn(email,password){
    return this.ngFireAuth.signInWithEmailAndPassword(email,password);
  }
  RegisterUser(email,password){
    return this.ngFireAuth.createUserWithEmailAndPassword(email,password);
  }
  SignOut(){
    return this.ngFireAuth.signOut();
  }
  
  getUser()
  {
    return this.ngFireAuth.user;
  }


  create(todo: TODO) {
    return this.ngFirestore.collection('tasks').add(todo);
  }

  getTasks() {
    return this.ngFirestore.collection('tasks').snapshotChanges();
  }
  
  getTask(id) {
    return this.ngFirestore.collection('tasks').doc(id).valueChanges();
  }

  update(id, todo: TODO) {
    this.ngFirestore.collection('tasks').doc(id).update(todo)
      .then(() => {
        this.router.navigate(['/todo-list']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('tasks/' + id).delete();
  }

}

