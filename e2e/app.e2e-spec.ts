import { DirectoryPage } from './app.po';

describe('directory App', () => {
  let page: DirectoryPage;

  beforeEach(() => {
    page = new DirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
