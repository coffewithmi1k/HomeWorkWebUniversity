describe('Data table specs: ', () => {
  const columns = ['FirstName', 'LastName', 'Age'];

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

  it.only('transforms table into arrya o objects', () => {
    cy.get('#t01 > tbody > tr:not(:first-child)')
    .then((trs) => {
      const tds = trs.map((tr) => {
        console.log(tr);
      })
      //console.log(trs);
    });
    })
  });
