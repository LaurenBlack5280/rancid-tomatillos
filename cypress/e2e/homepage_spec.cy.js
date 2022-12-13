describe('Home Page View', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      fixture: "movies.json"
    }).as("moviesData");
    cy.fixture("movies.json").as("movies")
    cy.visit("http://localhost:3000")
  })

  describe("Rancid Tomatillos Nav Bar and Hero", () => {

    it('Should have a title', () => {
      cy.get('.rancid-home').should("contain", "Rancid Tomatillos");
    })

    it("Should display a random movie with movie info", () => {
      cy.get('.hero-container').should('have.css', 'background-image')
      cy.get('.hero-movie-info h2').should("not.be.empty")
      cy.get(".rancid-meter-hero-rating .rr-1").should("not.be.empty")
      cy.get(".rancid-meter-hero-rating .rr-2").should("not.be.empty")
    });
  })

  describe("As a user, when I visit the app, all movies should be displayed", () => {
    it('Should show all movies', () => {
      cy.get('.movie-container').within(() => {
        cy.get(".movie-card").eq(0).should("contain", "Black Adam")
        .and("contain", "2022-10-19")
        cy.get(".movie-card").eq(1).should("contain", "The Woman King")
        .and("contain", "2022-09-15")
      })
    })
  })


})