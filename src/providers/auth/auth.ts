import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
public fireAuth:firebase.auth.Auth;
public userProfileRef:firebase.database.Reference;

@Injectable()
export class AuthProvider {
  constructor() {
  	this.fireAuth = firebase.auth();
  	this.userProfielRef = firebase.database().ref('/userProfile');
  }
}

loginUser(email: string, password: string): firebase.Promise<any> {
	return this.fireAuth.signInWithEmailAndPassword(email,password);
}

signupUser(email: string, password: string): firebase.Promise<any> {
	return this.fireAuth.createUserWithEmailAndPassword(email, password)
	.then( newUser => {
		this.userProfielRef.child(newUser.uid) .set({
			email: email
		})
	})
}