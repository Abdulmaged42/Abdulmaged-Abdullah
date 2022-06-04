import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
global.ExpectedText = ''
var locator
var faker = require('faker');
global.randomCountry = faker.address.country()
Given(/^open the site "([^"]*)"$/, (url) => {
    cy.visit(`${url}`)
})

Then(/^the title of the page should be "([^"]*)"$/, (title) => {

    cy.get('h1').invoke('text').should('eql', title)

})
Given(/^search about "([^"]*)" at page "([^"]*)"$/, (searchText, page) => {
    switch (page) {
        case 'hotels': locator = '.react-autosuggest__input'
            break;
        case 'table': locator = 'label>input'
            break;
        case 'booking': locator = '#ss'
            if (searchText == 'random') searchText = randomCountry

            break;
    }
    cy.get(locator).type(searchText)
    ExpectedText = searchText
})
And(/^click on "([^"]*)"$/, (text) => {
    cy.contains(`${text}`).click()
})