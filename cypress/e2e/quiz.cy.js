describe('Tech Quiz E2E Test', () => {
    it('should complete the quiz and show the score', () => {
      cy.visit('/');
      cy.get('button').contains('Start').click();
  
      // Loop through 10 questions and select the first option each time
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains(/^1/).click();
      }
  
      // Check if the score is displayed
      cy.contains(/Your score:/).should('be.visible');
    });
  });