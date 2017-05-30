import { ChipTrips2Page } from './app.po';

describe('chip-trips2 App', () => {
  let page: ChipTrips2Page;

  beforeEach(() => {
    page = new ChipTrips2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
