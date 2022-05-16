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

  it('transforms table into arrya o objects', () => {
    cy.get('#t01 > tbody > tr:not(:first-child)')
    .then((data) => {
      console.log(data);
      data.map(function()  {
        const tds = this.querySelectorAll('td');
        
        console.log(this.querySelectorAll('td'));
      })
      //const dataTrs = [...data];
     // console.log(dataTrs);
      })
    })
  });
