import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-module',
  template: `
    <p>
      test-module works!
    </p>
  `,
  styles: [
  ]
})
export class TestModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
