import { MaterialCkPage } from './app.po';

describe('material-ck App', () => {
  let page: MaterialCkPage;

  beforeEach(() => {
    page = new MaterialCkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
