import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Barang } from 'src/app/home/barang.model';
import { BarangService } from 'src/app/home/barang.service';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage implements OnInit {
  tambahBarang: FormGroup;
  barang: Barang[];
  lastId: string = null;
  tempId: number;
  tipe: string = null;

  constructor(
    private router: Router,
    private barangService: BarangService,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.tempId = this.barangService.getAllBarang().length;
    this.tambahBarang = new FormGroup({
      foto: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      tipe: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      merek: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      baseClock: new FormControl(null, {
        updateOn: 'change',
      }),
      boostClock: new FormControl(null, {
        updateOn: 'change',
      }),
      core: new FormControl(null, {
        updateOn: 'change',
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
      }),
      prosesor: new FormControl(null, {
        updateOn: 'change',
      }),
    });
    console.log(this.lastId);
  }

  async tambah() {
    const alert = await this.alertController.create({
      header: 'Tambah barang baru',
      message: 'Apakah anda yakin ingin menambahak barang baru?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya, Tambahkan',
          handler: () => this.addData()
        }
      ]
    });

    await alert.present();
  }

  ionViewWillEnter(){
    this.barang = this.barangService.getAllBarang();
  }

  addData(){
    this.barangService.addBarang(
      this.tempId,
      this.tambahBarang.value,
      this.lastId
      );
    this.router.navigate(['/admin']);
    console.log(this.tambahBarang.value);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Barang berhasil ditambahkan',
      color: "primary",
      duration: 2500
    });
    toast.present();
  }
}
