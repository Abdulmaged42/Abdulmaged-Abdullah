Feature: Feature name

    Background: open the page
        Given open the site "https://hotelsearchdirect.com/"
        When close the sign up form
        Then the title of the page should be "Don't overpay for the same room... just Book Direct!"

    Scenario Outline: Search with valid data
        Given search about "<text>" at page "hotels"
        And I wait for "1" second
        When the list of result should be visible
        Then the reurned results should be relative to the search text
        Examples:
            | text      |
            | cairo     |
            | ami       |
            | london    |
            | palestine |

    Scenario Outline: Search with inValid data
        Given search about "<text>" at page "hotels"
        And I wait for "1" second
        When the list of result should be notVisible
        Then the message "Enter the name of city or airport" should be displayed
        Examples:
            | text |
            | 1    |
            | 22   |
            | /    |
#any failing in assertion that mean script catch a bug (based on my exploratory testing )