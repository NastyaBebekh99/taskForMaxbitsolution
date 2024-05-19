Feature: Information in promo section 

  Scenario Outline: As a user, I can see information of Promo section 

    Given I am on the main page
    When I open Promo section
    When I open Status section
    Then I should see status <expectedStatus>
    When I open Promo section
    When I open Tournaments section
    Then I should see tournament RoxStars
    When I open Promo section
    When I open Bonus section
    Then I should see birthday bonus contains <text> 
    When I open Promo section
    When I open Lottery section
    Then I should see button <buttonName> 
    When I open Promo section
    When I open Cashback section
    Then I should see block named <blockName> 
    When I open Promo section
    When I open News section
    Then I should see more than 2 news
    When I open Promo section
    When I open Promotion section
    Then I should see more than 2 active promotions and more than 2 completed promotions

Examples:

| expectedStatus | text                     | buttonName    | blockName           |
| ELITE          | ПОДАРОК НА ДЕНЬ РОЖДЕНИЯ | Узнать больше | КАК ПОЛУЧИТЬ КЕШБЭК?|