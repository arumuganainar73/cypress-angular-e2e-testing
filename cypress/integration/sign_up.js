import Chance from 'chance';
const chance = new Chance();
it('signs up a new user', () => {
    cy.visit('http://localhost:4200/login');
    // Dummy data fixture
    const email = chance.email();
    const pass = 'ValidPassword23';

    // Click Login
    cy.get('#navToggle').click();
    cy.contains('Login').click();

    // Assert URL
    cy.url().should('include', 'login');

    // Fill out the form
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(pass);
    cy.get('button[type=submit]').click();

    // Assert welcome message
    cy.contains('Welcome new user!');
    cy.contains('Logout').click();
});
