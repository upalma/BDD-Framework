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
  "location": "loginStepDefinition.user_already_login_page()"
});
formatter.result({
  "duration": 4937002878,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_login_page_Free_CRM()"
});
formatter.result({
  "duration": 9857616,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_enters_username_user_enter_password()"
});
formatter.result({
  "duration": 162665495,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2891262935,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_in_on_home_page()"
});
formatter.result({
  "duration": 7075409,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 117147353,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"naveenk\" user enters \"test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user in on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_already_login_page()"
});
formatter.result({
  "duration": 4520247579,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_login_page_Free_CRM()"
});
formatter.result({
  "duration": 9021054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 35
    }
  ],
  "location": "loginStepDefinition.user_enters_username_user_enters_password(String,String)"
});
formatter.result({
  "duration": 174819753,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2701464561,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_in_on_home_page()"
});
formatter.result({
  "duration": 4069760,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 122036154,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"\u003cusername\u003e\" user enters \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user in on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 34,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 35,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \"naveenk\" user enters \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user in on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_already_login_page()"
});
formatter.result({
  "duration": 4872825740,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_login_page_Free_CRM()"
});
formatter.result({
  "duration": 7047744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 35
    }
  ],
  "location": "loginStepDefinition.user_enters_username_user_enters_password(String,String)"
});
formatter.result({
  "duration": 168625479,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3630953235,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_in_on_home_page()"
});
formatter.result({
  "duration": 3974271,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 110317098,
  "status": "passed"
});
});