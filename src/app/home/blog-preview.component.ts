import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'blog-preview',
  templateUrl: 'blog-preview.component.html',
  styleUrls: ['blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {
  @Input() blog;
  constructor() { }

  ngOnInit() {
  }

}
