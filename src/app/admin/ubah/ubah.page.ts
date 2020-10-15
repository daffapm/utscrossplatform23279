import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Barang } from 'src/app/home/barang.model';
import { BarangService } from 'src/app/home/barang.service';


@Component({
  selector: 'app-ubah',
  templateUrl: './ubah.page.html',
  styleUrls: ['./ubah.page.scss'],
})
export class UbahPage implements OnInit {
  ubahBarang : FormGroup;
  loadedBarang: Barang;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController,
    private barangService: BarangService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('barangId')) { return; }
      const barangId = paramMap.get('barangId');
      this.loadedBarang = this.barangService.getBarang(barangId);
    });
    
    this.ubahBarang = new FormGroup({
      foto: new FormControl(this.loadedBarang.foto, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merek: new FormControl(this.loadedBarang.merek, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.loadedBarang.model, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(this.loadedBarang.harga, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(this.loadedBarang.stok, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      baseClock: new FormControl(this.loadedBarang.baseClock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boostClock: new FormControl(this.loadedBarang.boostClock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      core: new FormControl(this.loadedBarang.core, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      thread: new FormControl(this.loadedBarang.thread, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      speed: new FormControl(this.loadedBarang.speed, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      ukuran: new FormControl(this.loadedBarang.ukuran, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      chipset: new FormControl(this.loadedBarang.chipset, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      prosesor: new FormControl(this.loadedBarang.prosesor, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  async ubah() {
    const alert = await this.alertController.create({
      header: 'Ubah barang',
      message: 'Apakah anda yakin ingin mengubah barang ini?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya, Ubah',
          handler: () => this.editData(),
        }
      ]
    });
    await alert.present();
  }

  editData(){
    this.barangService.editBarang(
      this.loadedBarang.id,
      this.ubahBarang.value
    );
    this.router.navigate(['./admin'])
    this.presentToast()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Barang berhasil diedit',
      color: "primary",
      duration: 2500
    });
    toast.present();
  }


}
