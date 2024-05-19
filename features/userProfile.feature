Feature: Information in profile

  Scenario Outline: As a user, I can see information in profile

    Given I am on the main page
    And I authorize with <email> and <password>
    When I open profile settings
    Then I see confirmed email with text <confirmationText>
    And I see user status <status>

Examples:

| email                       | password | confirmationText | status |
| a.bebekh+regpay1@jetmail.cc | 12345678 | Подтверждена     | NEW    |