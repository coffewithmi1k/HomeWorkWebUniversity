describe('It tests Landing Page: ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Home Page title should be visible', () => {
    cy.xpath('//*[text()="My Courses & Promo Codes:"]')
      .should('be.visible');
  });
});
