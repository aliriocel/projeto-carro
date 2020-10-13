import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Carro } from '../model/carro';
import { CarroService } from '../services/carro.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-carros-foto',
  templateUrl: './carros-foto.page.html',
  styleUrls: ['./carros-foto.page.scss'],
})
export class CarrosFotoPage implements OnInit {

  foto: any = null;
  carro: Carro = new Carro();
  fotoBlob : any = null;
  constructor(private carroServ: CarroService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private template: TemplateService

   ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {

      let id = url.get('id');

      this.carroServ.buscaPorId(id).subscribe(data => {
        this.carro = data.payload.data();
        this.carro.id = id;
        this.tirarFoto();
      }, err => {
        this.navCtrl.navigateRoot(['/carros']);
      })

    });
  }

  tirarFoto() {
    this.carroServ.obterFotoCamera.subscribe(data => {
      this.foto = data;
    })
  }

  obterFoto() {
   
    this.carroServ.obterFotoArquivo.subscribe(data => {
      this.foto = data;
    })
  }
  enviarFoto() {
    this.carroServ.uploadFoto(this.carro.id).subscribe(data => {
      console.log("Enviado");
      this.template.myAlert('Foto Enviar com sucesso!');
      this.navCtrl.navigateBack(['carros-detalhe', this.carro.id])
    }, err => {
      console.log(err);
    })

  }

}
