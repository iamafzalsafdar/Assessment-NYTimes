describe('NY Times App', () => {
  beforeEach(() => {
    // Visit the homepage
    cy.visit('/')
  })

  it('displays the app title', () => {
    cy.get('h1').should('contain', 'NY Times Most Popular Articles')
  })

  it('displays a list of articles', () => {
    cy.get('article').should('have.length.at.least', 1)
  })

  it('allows changing the time period', () => {
    // Open the select dropdown
    cy.get('button').click()

    // Select 7 days
    cy.contains('7 days').click()

    // URL should be updated
    cy.url().should('include', 'period=7')

    // Articles should be loaded
    cy.get('article').should('have.length.at.least', 1)
  })

  it('navigates to article detail page when clicking an article', () => {
    // Click the first article
    cy.get('article').first().click()

    // Should navigate to article detail page
    cy.url().should('include', '/articles/')

    // Should display article title
    cy.get('h1').should('exist')

    // Should have a back button
    cy.contains('Back to articles').should('exist')
  })

  it('navigates back to the homepage from article detail', () => {
    // First navigate to an article
    cy.get('article').first().click()

    // Click the back button
    cy.contains('Back to articles').click()

    // Should be back on the homepage
    cy.url().should('not.include', '/articles/')
    cy.get('h1').should('contain', 'NY Times Most Popular Articles')
  })
})
