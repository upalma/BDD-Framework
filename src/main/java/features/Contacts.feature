Feature: Free CRM create new contacts

Scenario Outline: Free CRM a new contact scenario

Given user is already login page
When title of login page is Free CRM
Then user enters "<username>" user enters "<password>"
Then user clicks on login button
Then user in on home page
Then user moves to new contact page
Then user enters new contact "<firstName>" and "<lastName>" and "<position>"
Then close the browser


Examples:
|username   |password   |firstName  |lastName   |position   |
|naveenk    |test@123   |Uzzal      |Palma      |Manager    |
|naveenk    |test@123   |Nevan      |Palma      |Director   |



Scenario: Free CRM login test scenario

Given user is already login page
When title of login page is Free CRM
Then user enters "naveenk" user enters "test@123"
Then user clicks on login button
Then user in on home page
Then close the browser


Scenario Outline: Free CRM login test scenario

Given user is already login page
When title of login page is Free CRM
Then user enters "<username>" user enters "<password>"
Then user clicks on login button
Then user in on home page
Then close the browser

Examples:
|username   |password   |
|naveenk    |test@123   |