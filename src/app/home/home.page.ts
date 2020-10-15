import { Component, OnInit } from '@angular/core';
import { Barang } from './barang.model';
import { BarangService } from './barang.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  barang: Barang[];
  private displayMode = 1;

  constructor(private barangService: BarangService) {}

  ngOnInit(){
    this.barang = this.barangService.getAllBarang();
  }

  ionViewWillEnter(){
    this.barang = this.barangService.getAllBarang();
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
  
}
