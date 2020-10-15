import { Component, Input, OnInit } from '@angular/core';
import { Barang } from '../barang.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() barang: Barang;
  constructor() { }

  ngOnInit() {}

}
