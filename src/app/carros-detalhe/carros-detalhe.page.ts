import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Carro } from '../model/carro';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-carros-detalhe',
  templateUrl: './carros-detalhe.page.html',
  styleUrls: ['./carros-detalhe.page.scss'],
})
export class CarrosDetalhePage implements OnInit {

  imagem: any = null;
  carro: Carro = new Carro();

  constructor(
    private route: ActivatedRoute,
    private carroServ: CarroService,
    private navCtrl: NavController,
    private fireStorage: AngularFireStorage,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.carroServ.buscaPorId(id).subscribe(data => {
        this.carro = data.payload.data();
        this.carro.id = data.payload.id as string;
        console.log(this.carro);
        this.downloadImage();
      })
    })
  }
  
  atualizar(carroObj) {
    this.navCtrl.navigateForward(['carros-update', carroObj.id]);
  }

  excluir(carroObj) {
    this.navCtrl.navigateForward(['carros-delete', carroObj.id]);
  }
  foto() {
    this.navCtrl.navigateForward(['/carros-foto', this.carro.id]);
  }

  downloadImage() {
    let ref = this.fireStorage.storage.ref().child(`carro/${this.carro.id}.jpg`)
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    }, err => {
      this.imagem = 'https://as1.ftcdn.net/jpg/02/44/86/32/500_F_244863211_hOmFjwcm5ZzNFh6ogWzj3dIGtsxoCUkk.jpg';
    })
  }
}
