import { Html5PokerPage } from './app.po';

describe('html5-poker App', () => {
  let page: Html5PokerPage;

  beforeEach(() => {
    page = new Html5PokerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
