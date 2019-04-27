import { AngularC8yfqbAudioPage } from './app.po';

describe('angular-c8yfqb-audio App', function() {
  let page: AngularC8yfqbAudioPage;

  beforeEach(() => {
    page = new AngularC8yfqbAudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
