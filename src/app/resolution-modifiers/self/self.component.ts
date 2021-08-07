import { Component, OnInit, Self } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css'],
  providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }]
})
export class SelfComponent implements OnInit {

  constructor(@Self() public flower?: FlowerService) { }

  ngOnInit(): void {
  }

}
