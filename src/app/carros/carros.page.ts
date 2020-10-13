import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Carro } from '../model/carro';
import { CarroService } from '../services/carro.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.page.html',
  styleUrls: ['./carros.page.scss'],
})
export class CarrosPage implements OnInit {
  
  carros: Carro[] = [];

  constructor(
    private carroServ : CarroService,
    private template: TemplateService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carros = [];
    this.template.loading.then(load => {
      load.present();
      
     this.carroServ.listar().subscribe(data => {
       
        data.map(c =>{
          let carro : Carro = c.payload.doc.data() as Carro;
          carro.id = c.payload.doc.id as string;
          this.carros.push(carro);
        })
        load.dismiss();
        console.log(this.carros);
      })
    })

  }

detalhe(obj : Carro){
  this.navCtrl.navigateForward(['/carros-detalhe', obj.id]);
}
}
