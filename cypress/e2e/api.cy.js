describe('API Tests', () => {

  it('should make a valid request', () => {
    // This is the correct place for the cy.request command
    cy.request('https://jsonplaceholder.typicode.com/users/1')
      .its('status')
      .should('eq', 200);
  });

});