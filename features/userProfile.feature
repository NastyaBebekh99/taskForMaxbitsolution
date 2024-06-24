Feature: Information in profile

  Scenario: As a user, I can see information in profile

    Given I am on the main page
    And I authorize with email and password
    When I open profile settings
    Then I see confirmed email with text Подтверждена
    And I see user status NEW
