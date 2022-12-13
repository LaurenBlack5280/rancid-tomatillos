describe('Single Movie Page View', () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2", {
      method: "GET",
      fixture: "../fixtures/movies.json"
    })
    cy.visit("http://localhost:3000")
  })

  it('As a user, I can click a movie and see its details', () => {
    cy.get('.movie-container').within(() => {
      cy.get(".movie-card").eq(1).click()
    })
  })

  it('As a user, I am informed if there is an error', () => {
    cy.contains('Sorry, something went wrong!')
  })
})