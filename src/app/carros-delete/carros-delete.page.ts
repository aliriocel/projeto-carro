import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Carro } from '../model/carro';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-carros-delete',
  templateUrl: './carros-delete.page.html',
  styleUrls: ['./carros-delete.page.scss'],
})
export class CarrosDeletePage implements OnInit {

  carro: Carro = new Carro();

  constructor(
    private router: ActivatedRoute,
    private clientServ: CarroService,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) { }

  

  ngOnInit(): void {

    this.router.paramMap.subscribe(resp => {
      let id = resp.get('id');
      this.firestore.collection('carro').doc(id).snapshotChanges().subscribe(data => {
        this.carro = data.payload.data() as Carro;
        this.carro.id = data.payload.id;
      })
    })
  }
  
  excluir(id: string) {
    this.clientServ.excluir(this.carro.id).subscribe(data=>{
      this.navCtrl.navigateRoot('carros');
    })
  }

}
