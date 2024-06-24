Feature: Information in promo section 

  Scenario Outline: As a user, I can see status Elite in Status section
    Given I am on the main page
    When I open <sectionName> section
    Then I should see status <expectedStatus>

Examples:
| sectionName | expectedStatus |
| СТАТУСЫ     | ELITE |
    
  Scenario Outline: As a user, I can see tournament Risk Effect in tournament section

    When I open <sectionName> section
    Then I should see tournament Risk Effect

Examples:
| sectionName | 
| ТУРНИРЫ     | 
  
  Scenario Outline: As a user, I can see status birthday bonus in bonus section

    When I open <sectionName> section
    Then I should see birthday bonus contains <text>

Examples:
| sectionName | text                     |
| БОНУСЫ      | ПОДАРОК НА ДЕНЬ РОЖДЕНИЯ |

  Scenario Outline: As a user, I can see button Узнать больше in Lottery section

    When I open <sectionName> section
    Then I should see button <buttonName> 

Examples:
| sectionName  | buttonName    |
| ЛОТЕРЕИ      | Узнать больше |

  Scenario Outline: As a user, I can see title Как получить кешбэк in Cashback section

    When I open <sectionName> section
    Then I should see block named <blockName> 

Examples:
| sectionName | blockName            |
| КЕШБЭК      | КАК ПОЛУЧИТЬ КЕШБЭК? |

  Scenario Outline: As a user, I can see more than 2 news in News section

    When I open <sectionName> section
    Then I should see more than 2 news
    

Examples:
| sectionName  | 
| НОВОСТИ      | 

  Scenario Outline: As a user, I can see more than 2 active promotions and more than 2 completed promotions in Promotion section

    When I open <sectionName> section
    Then I should see more than 2 active promotions and more than 2 completed promotions    

Examples:
| sectionName  | 
| АКЦИИ        | 