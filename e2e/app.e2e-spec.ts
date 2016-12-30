import { NewYearGameTmpPage } from './app.po';

describe('new-year-game-tmp App', function() {
  let page: NewYearGameTmpPage;

  beforeEach(() => {
    page = new NewYearGameTmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
