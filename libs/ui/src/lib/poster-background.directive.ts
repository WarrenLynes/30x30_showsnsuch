import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[showsnsuchPosterBackground]'
})
export class PosterBackgroundDirective implements OnInit {

  @Input() poster: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    console.log(this.poster);
    this.el.nativeElement.style.background = `url(${this.poster})!important`
  }

}
