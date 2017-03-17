import { UiroutertestPage } from './app.po';

describe('uiroutertest App', function() {
  let page: UiroutertestPage;

  beforeEach(() => {
    page = new UiroutertestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
