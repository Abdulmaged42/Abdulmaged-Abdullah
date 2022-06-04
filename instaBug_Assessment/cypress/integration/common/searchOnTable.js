import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';


Then(/^the result should be relative at columnIndex "([^"]*)"$/, (columnIndex) => {

    cy.xpath(`//table[@id='example']//tbody`).then((body) => {

        let numberOfRows = body.find('tr').length

        cy.log("numberOfRows : ", numberOfRows)

        for (let i = 1; i <= numberOfRows; i++) {
            /**i use column index here becuase search work at all columns 
             * we could use conditions to take column name and send column index to xpath based on column name  */
            cy.xpath(`//tbody/tr[${i}]/td[${Number(columnIndex)}]`).then(($value) => {

                cy.log("text", $value.text())

                expect($value.text().toUpperCase()).to.contains(ExpectedText.toUpperCase())

            })

        }

    })
})

Then(/^message "([^"]*)" should be displayed$/, (message) => {
    cy.xpath(`//td[contains(text(),'${message}')]`).should('be.visible')
})