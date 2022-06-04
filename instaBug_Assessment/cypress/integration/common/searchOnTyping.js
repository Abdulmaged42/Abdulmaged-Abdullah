// import { expect } from 'chai';
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';


When(/^close the sign up form$/, () => {
    cy.get('.close > span').click()
})





And(/^[I ]*wait [for "]*(\d+)[ "]*[second]{3,7}$/, (seconds) => {

    cy.wait(seconds * 1000)

})
When(/^the list of result should be (visible|notVisible)$/, (status) => {
    if (status == 'visible') cy.get('#react-autowhatever-1').should('be.visible')
    if (status == 'notVisible') cy.get('#react-autowhatever-1').should('not.be.visible')

})
Then(/^the reurned results should be relative to the search text$/, () => {
    cy.xpath(`//div[@id='react-autowhatever-1']/ul/li`).each(element => {
        cy.log("**** Actualtext ", element.text())
        expect(element.text().toUpperCase()).to.contains(ExpectedText.toUpperCase(), "not relative element")
    });
})
And(/^the message "([^"]*)" should be displayed$/, (message) => {
    cy.get('#react-autowhatever-1').invoke('text').should('eql', message)
})
