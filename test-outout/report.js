$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/palmauzzal/SeleniumProject/BDDFramework/src/main/java/features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create new contacts",
  "description": "",
  "id": "free-crm-create-new-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" user enters \"\u003cpassword\u003e\"",
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
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters new contact \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstName",
        "lastName",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Uzzal",
        "Palma",
        "Manager"
      ],
      "line": 17,
      "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Nevan",
        "Palma",
        "Director"
      ],
      "line": 18,
      "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters new contact \"Uzzal\" and \"Palma\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefination.user_already_login_page()"
});
formatter.result({
  "duration": 8802119632,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.title_login_page_Free_CRM()"
});
formatter.result({
  "duration": 10418354,
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
  "duration": 207038850,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3024847116,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_in_on_home_page()"
});
formatter.result({
  "duration": 13710154,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 796849520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uzzal",
      "offset": 25
    },
    {
      "val": "Palma",
      "offset": 37
    },
    {
      "val": "Manager",
      "offset": 49
    }
  ],
  "location": "loginStepDefination.user_enters_new_contact_and_and(String,String,String)"
});
formatter.result({
  "duration": 25022317,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"first_name\"}\n  (Session info: chrome\u003d70.0.3538.67)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Uzzals-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:69:1b9:c054:ce82%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591059 (a3d9684d10d61a..., userDataDir: /var/folders/mp/q48t92j91dz...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60071}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.67, webStorageEnabled: true}\nSession ID: 346643c719bddf23cd122149ed4748d3\n*** Element info: {Using\u003did, value\u003dfirst_name}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat stepDefinition.loginStepDefination.user_enters_new_contact_and_and(loginStepDefination.java:66)\n\tat ✽.Then user enters new contact \"Uzzal\" and \"Palma\" and \"Manager\"(/Users/palmauzzal/SeleniumProject/BDDFramework/src/main/java/features/Contacts.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "loginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters new contact \"Nevan\" and \"Palma\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefination.user_already_login_page()"
});
formatter.result({
  "duration": 8873496399,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.title_login_page_Free_CRM()"
});
formatter.result({
  "duration": 12220717,
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
  "duration": 226307690,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2622505445,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_in_on_home_page()"
});
formatter.result({
  "duration": 9266203,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 710493792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nevan",
      "offset": 25
    },
    {
      "val": "Palma",
      "offset": 37
    },
    {
      "val": "Director",
      "offset": 49
    }
  ],
  "location": "loginStepDefination.user_enters_new_contact_and_and(String,String,String)"
});
formatter.result({
  "duration": 20998168,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"first_name\"}\n  (Session info: chrome\u003d70.0.3538.67)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Uzzals-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:69:1b9:c054:ce82%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591059 (a3d9684d10d61a..., userDataDir: /var/folders/mp/q48t92j91dz...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60153}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.67, webStorageEnabled: true}\nSession ID: fbf8fac5927d9cd7f173422f35b93185\n*** Element info: {Using\u003did, value\u003dfirst_name}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat stepDefinition.loginStepDefination.user_enters_new_contact_and_and(loginStepDefination.java:66)\n\tat ✽.Then user enters new contact \"Nevan\" and \"Palma\" and \"Director\"(/Users/palmauzzal/SeleniumProject/BDDFramework/src/main/java/features/Contacts.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "loginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});