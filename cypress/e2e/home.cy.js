/// <reference types="Cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should verify the map is visible", () => {
    cy.get(".map-base").should("be.visible");
  });
});
