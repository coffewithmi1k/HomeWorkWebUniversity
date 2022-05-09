/// <reference types="cypress" />

  namespace Cypress {
    interface Chainable<Subject> {
      login(): Chainable<any>;
      selectProject(): Chainable<any>;
      openModalWindow(id: string, headerText: string): Chainable<any>;
      validateEditorText(): Chainable<any>;
      scrollToElement(id: string): Chainable<any>;
    }
  }
