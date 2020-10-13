import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../model/carro';
import { CarroService } from '../services/carro.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-carros-update',
  templateUrl: './carros-update.page.html',
  styleUrls: ['./carros-update.page.scss'],
})
export class CarrosUpdatePage implements OnInit {

  formGroup: FormGroup;
  carro: Carro = new Carro();

  constructor(private formBuilder: FormBuilder,
    private carroServ: CarroService,
    private template: TemplateService,
    private route: ActivatedRoute,
    private firestore: AngularFirestore) {
    this.iniciarForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(url => {
      let id = url.get('id');
      this.carroServ.buscaPorId(id).subscribe(data => {
        this.carro = data.payload.data();
        this.carro.id = data.payload.id as string;
        this.iniciarForm();
      })
    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      modelo: [this.carro.modelo, [Validators.required, Validators.minLength(30)]],
      marca: [this.carro.marca, [Validators.required, Validators.minLength(30)]],
      cor: [this.carro.cor, [Validators.required, Validators.minLength(30)]],
      combustivel: [this.carro.combustivel, [Validators.required, Validators.minLength(25)]],
      ano: [this.carro.ano, [Validators.required, Validators.minLength(5)]],
      preco: [this.carro.preco, [Validators.required, Validators.minLength(20)]]
    })
  }

  atualizar() {

    this.carroServ.atualizar(this.carro.id, this.formGroup.value).subscribe(data => {
      console.log(data);
      this.template.loading;
      this.template.myAlert('Atualizado com sucesso');
    })
  }

}
