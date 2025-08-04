// cypress/e2e/home.cy.js

// A Cypress test suite for the home page.
describe('Home Page', () => {
  // A test case that runs before any other tests in this suite.
  beforeEach(() => {
    // Visit the application's root URL.
    cy.visit('http://localhost:3000');
  });

  // A test case to check if the main header text is correct.
  it('should display the correct main heading and text', () => {
    // This test now expects the new heading you added.
    //cy.get('.App-header h1').should('have.text', 'Welcome to My New App!');

    // The first <p> tag has the original text.
    // We are now asserting that the first paragraph contains this text.
    //cy.get('.App-header p').should('have.text', 'Edit src/App.js and save to reload.');

    // The second <p> tag has the new text you added.
    // We are now asserting that the second paragraph contains this new text.
    // This is the line that was previously failing because the test
    // was not aware of the change you made.
    cy.get('.App-header p').eq(1).should('have.text', 'This is the new text I just added.');

    // We can also check if the React logo is visible.
    cy.get('.App-logo').should('be.visible');
  });
});
