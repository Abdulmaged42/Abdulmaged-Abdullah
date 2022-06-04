Feature: Feature name

    Background: open the page
        Given open the site "https://www.booking.com/"
        Then the title of the page should be "A lifetime of discounts? It's Genius."

    Scenario Outline: Search with valid data
        Given search about "<country>" at page "booking"
        And I wait for "1" second
        When result should be visible
        Then the result should be relative "country"
        Examples:
            | country |
            | cairo   |
            | tokyo   |
            | alex    |
    #any failing in assertion that mean script catch a bug (based on my exploratory testing )
    Scenario Outline: Search with inValid data
        Given search about "<text>" at page "booking"
        And I wait for "1" second
        Then result should be notVisible
        Examples:
            | text     |
            | 56456456 |
            | 44       |
            | / @   #  |
    #>>>>>this Scenario out of scope (search functionality) Scenario will test if reurned items clicable and redirect to the right page or not
    Scenario: Search with valid data and interact with returned items
        Given search about "random" at page "booking"
        And I wait for "1" second
        And result should be visible
        And the result should be relative "random"
        When click on item number "1" at the list
        And click on "Search"
        Then the title of the page should relative to selected country

