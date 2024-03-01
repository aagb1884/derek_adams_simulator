describe('App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

// Start Page

  it("Loads the app", () => {
    cy.get('.startScreen-title').contains('Adams');
});

// issue with cookies pop up, work on later
//   it('has a working link', () => {
//   cy.get('.superScoreboard').click();
//   cy.url().should('include','planetradio');
// })

  it('can visit each page in the menu list', () => {

  // game page
  cy.contains('Start').click()
  cy.location('pathname').should('eq', '/game')
  cy.go('back')

  // about page
  cy.contains('About').click()
  cy.location('pathname').should('eq', '/about')
  cy.go('back')

  // credits page
  cy.contains('Credits').click()
  cy.location('pathname').should('eq', '/credits')
  cy.go('back')
})

// Header

  it('has a burger menu you can click on that shows and hides the header', () => {
    cy.contains('Start').click()
    cy.get('.menuToggle').click({ force: true });
    cy.get('.header-container').should('be.visible');
    cy.get('.menuToggle').click({ force: true });
    cy.get('.header-container').should('not.exist')
  })

  it('can visit each item in the header list', () => {
    cy.contains('Start').click()
    cy.get('.menuToggle').click({ force: true });
    // game page
    cy.contains('Start Screen').click()
    cy.location('pathname').should('eq', '/')
    cy.go('back')
  
    // about page
    cy.get('.menuToggle').click({ force: true });
    cy.contains('About').click()
    cy.location('pathname').should('eq', '/about')
    cy.go('back')
  
    // credits page
    cy.get('.menuToggle').click({ force: true });
    cy.contains('Credits').click()
    cy.location('pathname').should('eq', '/credits')
    cy.go('back')
  })

  // gameplay
  it('has a text element', () => {
    cy.contains('Start').click();
    cy.get('.mainComponent-text').should('not.be.empty')
  })

  it('has a text element that changes when buttons are pressed', () => {
    cy.contains('Start').click();
    cy.get('.mainComponent-text').should('contain', 'You awake to find yourself');
    cy.get('.mainComponent-leftBtn').click()
    cy.get('.mainComponent-text').should('contain', 'Kilmarnock');
  })

})

