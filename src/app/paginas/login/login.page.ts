import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController, public menu: MenuController) { }

  logar() {
    this.nav.navigateForward('home');
  }
  cadastrar() {
    this.nav.navigateForward('add-associado');
  }

  //Quando entrar na página de Login
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  //Quando sair da página de Login
  ionViewDidLeave() {
    this.menu.enable(true);
  }

  ngOnInit() {
  }

}
