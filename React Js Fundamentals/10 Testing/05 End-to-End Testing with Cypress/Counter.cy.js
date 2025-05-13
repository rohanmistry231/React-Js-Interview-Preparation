// Main Learning Points: End-to-End Testing with Cypress
// Cypress tests the app in a real browser, simulating user interactions.

describe('Counter Component E2E Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Assuming the app is running locally
    });

    it('should display the initial count and increment it', () => {
        cy.get('[data-testid="count"]').should('have.text', 'Count: 0');
        cy.get('[data-testid="increment"]').click();
        cy.get('[data-testid="count"]').should('have.text', 'Count: 1');
    });

    it('should display API data', () => {
        cy.get('[data-testid="api-data"]').should('have.text', 'API Data: Mocked Data');
    });
});