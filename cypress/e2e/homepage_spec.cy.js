describe('Home Page View', () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2", {
      method: "GET",
      fixture: "../fixtures/movies.json"
    });
    cy.visit("http://localhost:3000")
  })

  describe("Rancid Tomatillos Nav Bar", () => {
    it('Should have a title', () => {
      cy.contains("Rancid Tomatillos");
    })
  })

  describe("As a user, when I visit the app, all movies should be displayed", () => {
    it('Should show all movies', () => {
      cy.get('.movie-container').within(() => {
        cy.get(".movie-card").eq(0).should("contain", "Money Plane")
        .and("contain", "2020-09-29")
        cy.get(".movie-card").eq(1).should("contain", "Mulan")
        .and("contain", "2020-09-04")
      })
    })
  })


})