Feature: Feature name

    Background: open the page
        Given open the site "https://datatables.net/examples/basic_init/zero_configuration.html"
        Then the title of the page should be "Zero configuration"

    Scenario Outline: Search with valid data
        Given search about "<text>" at page "table"
        When I wait for "1" second
        Then the result should be relative at columnIndex "<column>"
        Examples:
            | text              | column |
            | Ai                | 1      |
            | Software Engineer | 2      |
            | Tokyo             | 3      |
    Scenario Outline: Search with inValid data
        Given search about "<text>" at page "table"
        When I wait for "1" second
        Then message "No matching records found" should be displayed
        Examples:
            | text   |
            | 66666  |
            | math1  |
            | cairo  |
            | @@@@@# |