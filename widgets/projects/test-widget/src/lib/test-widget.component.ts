import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-widget',
  template: `
    <p>
      test-widget works!
    </p>
  `,
  styles: [
  ]
})
export class TestWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
