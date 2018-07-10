import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blah-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Array<Animal> = [
    { _id: "11", name: "cat", species: "feline" },
    { _id: "22", name: "sloth", species: "???" },
    { _id: "33", name: "giraffe", species: "cowish" },
    { _id: "44", name: "red panda", species: "bear"},
    { _id: "55", name: "platypus", species: "duck-beaver?" },
  ];

  constructor() { }

  ngOnInit() {
  }

}

class Animal {
  _id: string;
  name: string;
  species: string;
}
