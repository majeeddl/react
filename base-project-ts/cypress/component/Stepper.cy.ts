import Stepper from "../../src/components/Stepper";

const counterSelector = "[data-cy=counter]";
const incrementSelector = "[aria-label=increment]";
const decrementSelector = "[aria-label=decrement]";

describe("Stepper.cy.ts", () => {
  it("steppper should default to 0", () => {
    cy.mount(<Stepper></Stepper>);

    cy.get(counterSelector).should("have.text", "0");
  });
});
