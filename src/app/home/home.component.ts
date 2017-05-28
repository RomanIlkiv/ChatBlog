import { Component, OnInit } from '@angular/core';
import {BlogService} from "../shared/blog.service";

@Component({
  selector: 'blog-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public blogs = [];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

}
