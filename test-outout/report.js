$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/palmauzzal/BDD-Framework/src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" user enters \"test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user in on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefination.user_already_login_page()"
});
formatter.result({
  "duration": 5016758708,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.title_login_page_Free_CRM()"
});
formatter.result({
  "duration": 16037458,
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
  "location": "loginStepDefination.user_enters_username_user_enters_password(String,String)"
});
formatter.result({
  "duration": 200215339,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2806277649,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_in_on_home_page()"
});
formatter.result({
  "duration": 5051675,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 134910044,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cusername\u003e\" user enters \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user in on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"naveenk\" user enters \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user in on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefination.user_already_login_page()"
});
formatter.result({
  "duration": 4041438396,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.title_login_page_Free_CRM()"
});
formatter.result({
  "duration": 19476270,
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
  "location": "loginStepDefination.user_enters_username_user_enters_password(String,String)"
});
formatter.result({
  "duration": 195999086,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2575893257,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_in_on_home_page()"
});
formatter.result({
  "duration": 19074604,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 120677902,
  "status": "passed"
});
});