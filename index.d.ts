/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByTestId(testId: string): Chainable<Element>
  }
}

declare module "*.svg" {
  const content: string;
  export default content;
}
