import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/fruit';
import { FruitService } from 'src/app/fruit.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {
  fruits : Fruit [];
  constructor(private fruitService : FruitService) { }

  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data: Fruit[])=>{
      this.fruits = data;
    })

  }

}
