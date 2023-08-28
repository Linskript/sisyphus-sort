import { Injectable } from "@angular/core";
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
@Injectable({
  providedIn: "root",
})
export class FireserviceService {
  constructor(
    public ngFireAuth : AngularFireAuth,
  ) {}

  async registroUsuario(email:string, senha:string){
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, senha);
  }

  async loginUsuario(email:string, senha:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email, senha);
  }

  async sair(){
    return await this.ngFireAuth.signOut();
  }

  async perfil(){
    return await this.ngFireAuth.currentUser;
  }
}
