import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  template: `
  <svg width="13px" height="18" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.12L7.88 10L0 17.88L2.12 20L12.12 10L2.12 0L0 2.12Z" fill="#566787"/>
  </svg>
  `
})
export class ArrowIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}