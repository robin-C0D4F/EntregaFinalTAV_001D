import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DessertsService } from 'src/app/services/desserts.service';
import { ModalDessertsPage } from './modal-desserts/modal-desserts.page';
import { Dessert } from 'src/app/services/desserts';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.page.html',
  styleUrls: ['./desserts.page.scss'],
})
export class DessertsPage implements OnInit {

  desserts: Dessert[] = [];
  pageTitle = 'Desserts';
  image = 'dessert.jpg';
  pageIcon = `../../../assets/img/${this.image}`;

  constructor(private dessertService: DessertsService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    public storage: Storage
    ) { 
    this.getDesserts();
  }

  ngOnInit() {
  }

  getDesserts(){
    this.dessertService.getDesserts()
      .subscribe(data => {
        console.log(data);
        this.desserts = data;
    })
  }

  async addDessert(){
    const alert = await this.alertCtrl.create({
      header: 'Save a Dessert',
      inputs: [
        {
          name:'nombre',
          type:'text',
          placeholder:'Dessert Name'
        },
        {
          name:'ingredientes',
          type:'text',
          placeholder:'Ingredient List'
        },
        {
          name:'origen',
          type:'number',
          placeholder:'Place of origin'
        },
        {
          name:'preparacion',
          type:'text',
          placeholder:'Steps for cooking'
        },        
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          role:'confirm',
          handler: (data) => {
            this.dessertService.addDessert(data)
          }
        }
      ]
    });
    await alert.present();
  }

  async openDessert(dessert:Dessert){
    const modal = await this.modalCtrl.create({
      component: ModalDessertsPage,
      componentProps: {id:dessert.id},
      initialBreakpoint: 1.0,
      breakpoints: [0,0.5,0.8],
    });
    await modal.present();
  }


}
