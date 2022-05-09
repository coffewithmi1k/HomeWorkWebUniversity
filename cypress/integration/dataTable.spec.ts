describe('Data table specs: ', () => {
  beforeEach(() => {
    cy.visit('Data-Table/');
  });

  it('It verifies name, surname, input box can be filled', () => {
    cy.xpath('//input[@name="firstname"]')
      .type('Yurii');

    cy.xpath('//input[@name="lastname"]')
      .type('K');

    cy.get('textarea')
      .clear()
      .type('Random text');
  });
});
