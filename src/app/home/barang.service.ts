import { Injectable } from '@angular/core';
import { Barang } from './barang.model';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  private barang: Barang[] = [
    {
      id: 'barang1',
      tipe: 'CPU',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2020/6/9/9651507/9651507_9d95c048-69f9-4a75-a97f-8eb73ab50c83_700_700',
      merek: 'Intel',
      model: 'Core i7-10700',
      baseClock: '2.9',
      boostClock: '4.8',
      core: 8,
      thread: 16,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 5199000,
      stok: 3,
    },
    {
      id: 'barang2',
      tipe: 'CPU',
      foto: 'https://cf.shopee.co.id/file/0b68418c9b23538b3b0344624627b7cc',
      merek: 'Intel',
      model: 'Core i9-10850K',
      baseClock: '3.6',
      boostClock: '5.2',
      core: 10,
      thread: 20,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 7399000,
      stok: 4,
    },
    {
      id: 'barang3',
      tipe: 'CPU',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/12/16/19577319/19577319_254924cb-51a8-4cd4-ade9-670a31f7f3f1_700_700',
      merek: 'AMD',
      model: 'Ryzen 7 3700X',
      baseClock: '3.6',
      boostClock: '4.4',
      core: 8,
      thread: 16,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 5159000,
      stok: 0,
    },
    {
      id: 'barang4',
      tipe: 'CPU',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2020/7/7/9651507/9651507_ae33b43c-03ee-4613-be52-4e048dfd461f_992_992',
      merek: 'AMD',
      model: 'Ryzen 5 3600XT',
      baseClock: '3.8',
      boostClock: '4.5',
      core: 6,
      thread: 12,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 3887000,
      stok: 7,
    },
    {
      id: 'barang5',
      tipe: 'CPU',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2020/6/30/9651507/9651507_35d045a1-e60c-4bf6-9385-3037f91b146d_700_700',
      merek: 'AMD',
      model: 'Ryzen 9 3950X',
      baseClock: '3.5',
      boostClock: '4.7',
      core: 16,
      thread: 32,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 12299000,
      stok: 5,
    },
    {
      id: 'barang6',
      tipe: 'RAM',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/6/9651507/9651507_14347757-44fd-4be8-ace6-f9301929eca9_914_914',
      merek: 'ADATA',
      model: 'XPG SPECTRIX D50',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: 'PC28800 (3600MHz)',
      ukuran: 32,
      chipset: '',
      prosesor: '',
      harga: 1456000,
      stok: 9,
    },
    {
      id: 'barang7',
      tipe: 'RAM',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/6/15811796/15811796_c7031bb2-bdf0-482c-b17b-bc5abbb69398_582_582',
      merek: 'Avexir',
      model: 'Raiden Series',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: 'PC24000 (3000MHz)',
      ukuran: 16,
      chipset: '',
      prosesor: '',
      harga: 1356000,
      stok: 0,
    },
    {
      id: 'barang8',
      tipe: 'RAM',
      foto: 'https://cf.shopee.co.id/file/183736c991c09c8b422f9024d74198a5',
      merek: 'Corsair',
      model: 'Vengeance LPX',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: 'PC21000 (2666MHz)',
      ukuran: 32,
      chipset: '',
      prosesor: '',
      harga: 2229000,
      stok: 7,
    },
    {
      id: 'barang9',
      tipe: 'RAM',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/7/99734883/99734883_f9d00eca-863e-4570-a0eb-4bbd471df536_670_670.jpg',
      merek: 'Corsair',
      model: 'Dominator Platinum RGB',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: 'PC25600 (3200MHz)',
      ukuran: 16,
      chipset: '',
      prosesor: '',
      harga: 2069000,
      stok: 8,
    },
    {
      id: 'barang10',
      tipe: 'Motherboard',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/8/28/66039451/66039451_533bae16-f7f6-4666-a254-cb8f8b5d579a_500_500',
      merek: 'GALAX',
      model: 'B550M',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: 'AMD B550',
      prosesor: 'AMD AM4 Ryzen',
      harga: 1370000,
      stok: 5,
    },
    {
      id: 'barang11',
      tipe: 'Motherboard',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2019/7/27/9651507/9651507_a7c07c6b-b477-4712-b7d4-49299d607cf1_1000_1000',
      merek: 'Gigabyte',
      model: 'X570 Aorus Xtreme',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: 'AMD X570',
      prosesor: 'AMD 3rd & 2nd Gen Ryzen',
      harga: 12270000,
      stok: 3,
    },
    {
      id: 'barang12',
      tipe: 'Motherboard',
      foto: 'https://www.asus.com/media/global/products/uri12btqafuvwte6/P_setting_fff_1_90_end_600.png',
      merek: 'Asus',
      model: 'ROG STRIX B550-F GAMING',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: 'AMD B550',
      prosesor: 'AMD 3rd & 2nd Gen Ryzen',
      harga: 3580000,
      stok: 10,
    },
    {
      id: 'barang13',
      tipe: 'Motherboard',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2019/7/27/9651507/9651507_faea5323-0ab8-45f3-8f12-b2185f540d02_600_600',
      merek: 'MSI',
      model: 'B365M Pro-VDH',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: 'Intel® B365',
      prosesor: 'Max Support i9',
      harga: 1263000,
      stok: 15,
    },
    {
      id: 'barang14',
      tipe: 'Motherboard',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/5/15/2369805/2369805_71378538-8475-475e-8f59-df413a815416_700_700',
      merek: 'Gigabyte',
      model: 'H310M-DS2',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: 'Intel® H310',
      prosesor: 'Max Support i9',
      harga: 926000,
      stok: 13,
    },
    {
      id: 'barang15',
      tipe: 'GPU',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/6/28/9041625/9041625_181762a6-d2b3-4df4-b739-0790005f4956_700_700.jpg',
      merek: 'XFX',
      model: 'Radeon RX 580',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 2950000,
      stok: 9,
    },
    {
      id: 'barang16',
      tipe: 'GPU',
      foto: 'https://nucbd.com/wp-content/uploads/2019/04/GALAX-RTX-2060-EX-1-Click-OC-6GB-GDDR6-Graphics-Card.jpg',
      merek: 'GALAX',
      model: 'Geforce RTX 2060',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 5100000,
      stok: 6,
    },
    {
      id: 'barang17',
      tipe: 'GPU',
      foto: 'https://www.asus.com/media/global/products/cBG2qm5wXMAqScSJ/P_setting_fff_1_90_end_600.png',
      merek: 'Asus',
      model: 'Geforce RTX 2080',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 10900000,
      stok: 3,
    },
    {
      id: 'barang17',
      tipe: 'GPU',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/4/25/863736/863736_54eb1d13-1c2a-41ce-a211-67c50d827a14_700_700.png',
      merek: 'GALAX',
      model: 'Geforce GTX 1660',
      baseClock: '',
      boostClock: '',
      core: null,
      thread: null,
      speed: '',
      ukuran: null,
      chipset: '',
      prosesor: '',
      harga: 3350000,
      stok: 4,
    }
  ];

  constructor() { }

  getAllBarang(){
    return [...this.barang];
  }

  getBarang(barangId: string){
    return {...this.barang.find(barang=>{
      return barang.id === barangId;
    })};
  }

  deleteBarang(barangId: string){
    this.barang = this.barang.filter(barang => {
      return barang.id !== barangId;
    })
  }

  addBarang(
    tempId: number,
    tambahBarang: Barang,
    lastId: string
    ){
      length = this.barang.length;
      console.log(tambahBarang);
      lastId = 'barang' + tempId;
      this.barang.push({
        id: lastId,
        foto: tambahBarang.foto,
        tipe: tambahBarang.tipe,
        merek: tambahBarang.merek,
        model: tambahBarang.model,
        baseClock: tambahBarang.baseClock,
        boostClock: tambahBarang.boostClock,
        core: tambahBarang.core,
        thread: tambahBarang.thread,
        speed: tambahBarang.speed,
        ukuran: tambahBarang.ukuran,
        chipset: tambahBarang.chipset,
        prosesor: tambahBarang. prosesor,
        harga: tambahBarang.harga,
        stok: tambahBarang.stok
      });
    }

  editBarang(
    barangId: string,
    ubahBarang: Barang,
    ){
    length = this.barang.length;
    for(var i = 0; i < length; i++){
      if(this.barang[i].id == barangId){
        this.barang[i].foto = ubahBarang.foto;
        this.barang[i].merek = ubahBarang.merek;
        this.barang[i].model = ubahBarang.model;
        this.barang[i].harga = ubahBarang.harga;
        this.barang[i].baseClock = ubahBarang.baseClock;
        this.barang[i].boostClock = ubahBarang.boostClock;
        this.barang[i].core = ubahBarang.core;
        this.barang[i].thread = ubahBarang.thread;
        this.barang[i].speed = ubahBarang.speed;
        this.barang[i].ukuran = ubahBarang.ukuran;
        this.barang[i].chipset = ubahBarang.chipset;
        this.barang[i].prosesor = ubahBarang.prosesor;
      }
    }
  }
}
