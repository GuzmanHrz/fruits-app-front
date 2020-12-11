import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruit } from 'src/app/fruit';
import { FruitService } from 'src/app/fruit.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {
  fruits : Fruit [];
  columsToDisplay: string[]  = ["name","size","color","delete","edit"]
  constructor(public fruitService : FruitService,
              private router: Router,) { }

  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data: Fruit[])=>{
      this.fruits = data;
    })
  }

  delete(id) {

    this.fruitService.delete(id).subscribe(() =>{
      this.fruits = this.fruits.filter(fruit => fruit.id != id)
    });

  }

  edit(id){
    this.router.navigate(['/edit',id]);
  }






}
