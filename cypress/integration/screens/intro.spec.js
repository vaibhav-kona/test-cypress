import Test1 from '../../../src/Test1';

context('make screen load', () => {
  it('should work', () => {
    cy.visit('http://localhost:3009/');
    cy.get('[data-cy=test-content]').should('be', 'This a jsx component.')
  })
})