import { ChatBlogPage } from './app.po';

describe('chat-blog App', function() {
  let page: ChatBlogPage;

  beforeEach(() => {
    page = new ChatBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
