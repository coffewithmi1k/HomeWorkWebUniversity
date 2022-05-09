import { datePickerPageLocators } from '../const/webUniversityConstands';

describe('Date Picker verification: ', () => {
  const randomDay = Math.floor(Math.random() * 29);

  beforeEach(() => {
    cy.visit('Datepicker/');
  });

  it('It verifies date picker is visible', () => {
    cy.xpath(datePickerPageLocators.datePickerFieldLocator)
      .should('be.visible');
  });

  it('It verifies day can be selected', () => {
    cy.xpath(datePickerPageLocators.datePickerFieldLocator)
      .click();

    cy.get(datePickerPageLocators.DaysCalendarLocator).first().click();
  });

  it('It verifies month, year and day can be selected', () => {
    cy.xpath(datePickerPageLocators.datePickerFieldLocator)
      .click();

    cy.get(datePickerPageLocators.MonthPickerSwitchLocator).first().click();
    cy.get(datePickerPageLocators.YearPickerSwitchLocator).click();
    cy.contains('2024').click();
    cy.contains('Jan').click();

    cy.get(datePickerPageLocators.DaysCalendarLocator).first().click();
  });
});
