import { Component, Input, OnInit } from '@angular/core';

import { Food } from '../../models/ResponseApi.interface';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() item!: Food;
  menu: Food[];

  constructor(public foodService: FoodService) {
    this.menu = [];
  }

  ngOnInit(): void {}

  // TODO: Poder agregar un item a una lista
  addItem() {
    this.foodService.addToMenu(this.item);
  }
}