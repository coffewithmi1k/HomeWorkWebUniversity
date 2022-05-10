describe('Web University > Auto complete:', () => {
    beforeEach(() => {
        cy.visit('Autocomplete-TextField/autocomplete-textfield.html');
    })

    it('verifies item from appeared dropdown can be selected', () => {
        cy.get('#myInput')
        .type('f');

        cy.get('#myInputautocomplete-list div')
        .first()
        .click();
    })
})