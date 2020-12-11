import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { FruitService } from '../../fruit.service';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/fruit';

@Component({
  selector: 'app-create-fruit',
  templateUrl: './create-fruit.component.html',
  styleUrls: ['./create-fruit.component.scss']
})
export class CreateFruitComponent implements OnInit {
  fruitForm: FormGroup;
  sizes = ["small", "medium", "large"];
  size;

  constructor(public fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              public fruitService: FruitService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = +params.get('id');
      if (id) {
        this.getFruit(id);
      }
    })
    this.fruitForm = this.fb.group({
      name:  [''],
      size:  [''],
      color: [''],
    })
  }

  changeSize(e) {
    this.size.setValue(e.target.value, {
      onlySelf: true
    })
  }
  getFruit(id: number){
    this.fruitService.getFruit(id).subscribe(
      (fruit: Fruit) => this.editFruit(fruit),
      (err: any) => console.log(err)
    );
  }

  editFruit(fruit: Fruit) {
    this.fruitForm.patchValue({
      name:  fruit.name,
      size:  fruit.size,
      color: fruit.color

    });

  }
  submitForm() {
    this.fruitService.create(this.fruitForm.value).subscribe(res => {
      this.router.navigateByUrl('/')})

  }

}
