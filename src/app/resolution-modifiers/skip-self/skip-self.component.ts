import { Component, OnInit, SkipSelf } from '@angular/core';
import { LeafService } from '../leaf.service';

@Component({
  selector: 'app-skip-self',
  templateUrl: './skip-self.component.html',
  styleUrls: ['./skip-self.component.css'],
  providers: [{ provide: LeafService, useValue: { emoji: '🍁' } }]
})
export class SkipSelfComponent implements OnInit {

  constructor(@SkipSelf() public leaf: LeafService) { }

  ngOnInit(): void {
  }

}
