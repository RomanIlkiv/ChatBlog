import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  public blogs = [{
    title: 'Title 1',
    body: 'Body of blog 1',
    author: 'Roman',
    date: '2017'
  }, {
    title: 'Title 2',
    body: 'Body of blog 2 sgdfg dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdgd dfgdfgcvbcvb cvbcvb uouiouio iuouiou ghgjghj sgdfg dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdgd dfgdfgcvbcvb cvbcvb uouiouio iuouiou ghgjghj sgdfg dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdgd dfgdfgcvbcvb cvbcvb uouiouio iuouiou ghgjghj sgdfg dfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdfgdfg dfgdfgdgd dfgdfgcvbcvb cvbcvb uouiouio iuouiou ghgjghj',
    author: 'Oleg',
    date: '2017'
  }, {
    title: 'Title 3',
    body: 'Body of blog 3',
    author: 'Roman',
    date: '2017'
  }, {
    title: 'Title 4',
    body: 'Body of blog 4',
    author: 'Gerrard',
    date: '2017'
  }, {
    title: 'Title 5',
    body: 'Body of blog 5',
    author: 'Torres',
    date: '2017'
  }, {
    title: 'Title 6',
    body: 'Body of blog 6',
    author: 'Google',
    date: '2017'
  }];

  constructor() {}

  getBlogs() {
    return this.blogs;
  }

}
