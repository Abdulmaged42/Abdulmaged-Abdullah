import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';



When(/^result should be (visible|notVisible)$/, (status) => {
    if (status == 'visible') cy.xpath(`(//input[@id='ss']//..//../ul)[1]`).should('be.visible')
    else cy.xpath(`(//input[@id='ss']//..//../ul)[1]`).should('not.be.visible')


})
Then(/^the result should be relative "([^"]*)"$/, (data) => {
    cy.xpath(`(//input[@id='ss']//..//../ul)[1]/li`).each(element => {
        var expextedTxt
        if (data == 'random') expextedTxt = randomCountry
        else expextedTxt = ExpectedText
        expect(element.text().toUpperCase()).to.contains(expextedTxt.toUpperCase(), "not relative element")
    });
})
When(/^click on item number "([^"]*)" at the list$/, (element) => {
    cy.xpath(`(//input[@id='ss']//..//../ul)[1]/li[${Number(element)}]`).click();
})
Then(/^the title of the page should relative to selected country$/, () => {

    cy.get('h1').invoke('text').should('contains', randomCountry)

})