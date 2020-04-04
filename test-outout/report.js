$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/palmauzzal/BDD-Framework/src/main/java/features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user in on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_login_page()"
});
formatter.result({
  "duration": 4136255736,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_login_page_Free_CRM()"
});
formatter.result({
  "duration": 12065571,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_user_enter_password()"
});
formatter.result({
  "duration": 622968090,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 727588115,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_in_on_home_page()"
});
formatter.result({
  "duration": 10309154,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 119974722,
  "status": "passed"
});
});