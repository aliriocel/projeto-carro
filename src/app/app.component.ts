import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Estoque de Veículos',
      url: '/carros',
      icon: 'car'
    },

    {
      title: 'Adicionar Carro',
      url: '/carros-novo',
      icon: 'add'
    }, 
    {
      title: 'Clientes',
      url: '/clientes',
      icon: 'person'
    },
    {
      title: 'Novo CLiente',
      url: '/clientes-novo',
      icon: 'person-add'
    },  
  
    {
      title: 'Maps',
      url: '/maps',
      icon: 'map'
    },
    {
      title: 'Localização da Nossa Loja',
      url: '/maps-geolocation',
      icon: 'location'
    },
    {
      title: 'Sair',
      url: '/logoff',
      icon: 'power'
    },
    
    
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
