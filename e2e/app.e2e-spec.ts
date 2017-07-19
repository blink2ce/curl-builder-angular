import { CurlBuilderPage } from './app.po';

describe('curl-builder App', () => {
  let page: CurlBuilderPage;

  beforeEach(() => {
    page = new CurlBuilderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
