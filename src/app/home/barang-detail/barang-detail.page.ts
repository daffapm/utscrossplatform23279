import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barang } from '../barang.model';
import { BarangService } from '../barang.service';

@Component({
  selector: 'app-barang-detail',
  templateUrl: './barang-detail.page.html',
  styleUrls: ['./barang-detail.page.scss'],
})
export class BarangDetailPage implements OnInit {
  loadedBarang: Barang;
  constructor(
    private activatedRoute: ActivatedRoute,
    private barangService: BarangService,
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('barangId')){ return; }
      const barangId = paramMap.get('barangId');
      this.loadedBarang = this.barangService.getBarang(barangId);
    });
  }

}
