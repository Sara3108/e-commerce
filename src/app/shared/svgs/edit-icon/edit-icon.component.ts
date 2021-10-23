import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-icon',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
   version="1.1" width="20" height="20" viewBox="0 0 256 256" xml:space="preserve">
    <defs>
    </defs>
    <g transform="translate(128 128) scale(0.72 0.72)" style="">
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" >
      <path d="M 78.922 52.21 L 27.435 0.723 c -0.964 -0.964 -2.526 -0.964 -3.489 0 L 0.723 23.946 c -0.964 0.964 -0.964 2.526 0 3.489 L 52.21 78.922 L 78.922 52.21 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #566787; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      <path d="M 86.334 89.898 l -31.622 -8.473 l 26.713 -26.713 l 8.473 31.622 C 90.477 88.498 88.498 90.477 86.334 89.898 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #566787; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    </g>
    </g>
  </svg>
`
})
export class EditIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
