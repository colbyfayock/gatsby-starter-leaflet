/// <reference types="Cypress" />

describe( 'Map', () => {
  beforeEach(() => {
    cy.visit( '/' );
  });

  it( 'should verify the map is visible', () => {
    cy.get( '.map-base' ).should( 'be.visible' );
  });
});
