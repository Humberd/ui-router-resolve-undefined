import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  template: `Hello: {{foo}}`
})
export class HomeComponent implements OnInit {
  @Input() foo: string;

  constructor() {
  }

  ngOnInit() {
  }

}
