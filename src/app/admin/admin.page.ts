import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, ToastController } from '@ionic/angular';
import { Barang } from '../home/barang.model';
import { BarangService } from '../home/barang.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  barang: Barang[];

  constructor(
    private barangService: BarangService,
    private alertCtrl: AlertController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.barang = this.barangService.getAllBarang();
  }

  ionViewWillEnter(){
    this.barang = this.barangService.getAllBarang();
  }

  ubah(barang: Barang, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(barang.merek, barang.model, 'berhasil diedit')
  }

  async hapus(barangId:string, slidingItem: IonItemSliding){
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Hapus Barang',
      message: 'Apakah anda yakin ingin menghapus barang ini?',
      buttons:[
        {
          text: 'Tidak',
          role: 'cancel'
        },
        {
          text: 'Ya, Hapus',
          handler: () => this.deleteData(barangId)
        }
      ]
    });
    await alert.present();
  }

  deleteData(barangId:string){
    this.barangService.deleteBarang(barangId);
    this.ionViewWillEnter();
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Barang berhasil dihapus',
      color: "primary",
      duration: 2500
    });
    toast.present();
  }

}
