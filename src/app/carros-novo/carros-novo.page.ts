import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CarroService } from '../services/carro.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-carros-novo',
  templateUrl: './carros-novo.page.html',
  styleUrls: ['./carros-novo.page.scss'],
})
export class CarrosNovoPage implements OnInit {

  formGroup: FormGroup;

  constructor(private carroServ: CarroService,
    private formBuilder: FormBuilder,
    private template: TemplateService,
    private navCtrl: NavController,) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  cadastrar() {

    this.template.loading.then(load => {
      load.present();
      this.carroServ.cadastrar(this.formGroup.value).subscribe(
        data => {
          load.dismiss();
          this.template.myAlert('Cadastrado com sucesso');
          //Limpar informações no formulário!
          this.formGroup.reset();
          //this.navCtrl.navigateBack(['clientes'])
        },
        err => {
          this.template.myAlert('Erro ao cadastrar');
        });
    })

  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      modelo: ['', [Validators.required, Validators.minLength(3)]],
      marca: ['', [Validators.required, Validators.minLength(3)]],
      cor: ['', [Validators.required, Validators.minLength(3)]],
      combustivel: ['', [Validators.required, Validators.minLength(3)]],
      ano: ['', [Validators.required, Validators.minLength(3)]],
      preco: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

}
