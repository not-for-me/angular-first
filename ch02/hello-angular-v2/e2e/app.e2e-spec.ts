import { HelloAngularV2Page } from './app.po';

describe('hello-angular-v2 App', () => {
  let page: HelloAngularV2Page;

  beforeEach(() => {
    page = new HelloAngularV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
