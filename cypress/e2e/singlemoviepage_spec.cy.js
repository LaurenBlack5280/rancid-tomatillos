describe("Single Movie's Detail Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      fixture: "movieDetails.json",
    }).as("singleMovie");

    cy.visit("http://localhost:3000");

    cy.get(".movie-container").within(() => {
      cy.get(".movie-card").eq(0).click();
    });
  });

  describe("As a user, I can click a movie, and see that movie’s details", () => {
    it("Should display a movie's poster", () => {
      cy.wait("@singleMovie");
      cy.get("@singleMovie").its("response.statusCode").should("eq", 200);

      cy.get("@singleMovie").then((response) => {
        cy.log(response.response.body.movie);
        expect(response.response.body.movie.id).to.eql(724495);
        cy.get(".movie-poster-container")
          .find("img")
          .should("have.attr", "src")
          .should("include", response.response.body.movie.poster_path);
      });
    });

    it("Should display a movie's entire information", () => {
      cy.wait("@singleMovie");

      cy.get("@singleMovie").then((response) => {
        cy.get(".movie-descriptions-container")
          .should("contain", response.response.body.movie.title)
          .and("contain", response.response.body.movie.release_date)
          .and("contain", response.response.body.movie.runtime)
          .and("contain", response.response.body.movie.overview)
          .and("contain", response.response.body.movie.budget)
          .and("contain", response.response.body.movie.revenue)
          .and("contain", response.response.body.movie.tagline);

        cy.get(response.response.body.movie.genres).each((el) => {
          cy.get(".movie-title-info").should("contain", el);
        });
        cy.get(".rancid-meter").should(
          "contain",
          `${response.response.body.movie.average_rating}/10`
        );
      });
    });
  });
});
