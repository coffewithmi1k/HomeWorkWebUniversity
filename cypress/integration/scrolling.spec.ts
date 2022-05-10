
describe('Web University', () => {
    beforeEach(() => {
        cy.visit('Scrolling/');  
    })

    it('verifies some scrolling tests', () => {
        cy.get('#zone1')
        .trigger('mouseover');
    })
})