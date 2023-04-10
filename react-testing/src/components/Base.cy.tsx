import React from "react";
import Base from "./Base";
import Hello from "./Hello";

describe("<Base />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Base />);

    cy.get("div").should("have.class", "hello");

    cy.get("#hello").should("have.text", "Hello World");

    cy.get(".hello").should("have.text", "Hello World");
  });
});
