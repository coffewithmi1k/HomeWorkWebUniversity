describe('Web University > Pop-up Alerts: ', () => {
  beforeEach(() => {
    cy.visit('Popup-Alerts/');
  });

  it('It verifies javascript Alert', () => {
    cy.get('#button1')
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!');
    });
    cy.on('window:confirm', () => true);
  });

  it('It verifies javascript Confirm box', () => {
    cy.get('#button4')
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Press a button!');
    });
    cy.on('window:confirm', () => true);
  });

  it('It verifies Modal Pop-up', () => {
    cy.get('#button2')
      .click();

    cy.get('.modal-title')
      .should('contain', 'It’s that Easy!!  Well I think it is.....');
  });

  it('It verifies Ajax Loader', () => {
    Cypress.on('uncaught:exception', (err, runnable) => false);
    cy.get('#button3')
      .click();

    cy.get('#button1')
      .click({ timeout: 8000 });

    cy.get('.modal-title')
      .should('contain', 'Well Done For Waiting....!!!');
  });
});
