describe('Web University > File Upload:', () => {
    beforeEach(() => {
        cy.visit('File-Upload/');
    });

    it('verifies file can be uploaded', () => {
         cy.get('#myFile')
         .attachFile('1.png');

         cy.get('#submit-button')
         .click();
    });
})