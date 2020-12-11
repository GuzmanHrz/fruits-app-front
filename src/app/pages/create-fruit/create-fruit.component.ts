import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { FruitService } from '../../fruit.service'

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
              public FruitService: FruitService) { }

  ngOnInit(): void {
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

  submitForm() {
    this.FruitService.create(this.fruitForm.value).subscribe(res => {
      this.router.navigateByUrl('/')})

  }

}
