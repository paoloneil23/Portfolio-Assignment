describe('Signup Form E2E', () => {
  it('fills out and submits the form', () => {
    cy.visit('http://localhost:5173/signup'); //Change if different

    cy.get('input[placeholder="Full Name"]').type('Test User');
    cy.get('input[placeholder="Email Address"]').type('test@example.com');
    cy.get('input[placeholder="Password"]').type('password123');

    cy.contains('Sign Up').click();

    //Optional success check
    //cy.url().should('not.include', '/signup');
  });
});