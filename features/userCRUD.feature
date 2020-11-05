Feature: User CRUD

#  Scenario: User create
#    When user create
#    Then check that user was created
#
#  Scenario: User update
#    When user updated
#    Then check that user was updated
#
#  Scenario: User delete
#    When user delete
#    Then check that user was deleted


  Scenario Outline: user CRUD
    When user "<action>"
    Then check that user was "<status>"

    Examples:
      | action  | status |
      | create  | 201    |
      | update  | 200    |
      | delete  | 204    |
