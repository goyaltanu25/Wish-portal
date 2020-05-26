import { Component, OnInit } from '@angular/core';
import {data} from '../../assets/data/data';
@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {
  empData = data;
  constructor() { }

  ngOnInit(): void {
  }

}
