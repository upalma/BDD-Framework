package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //features: path of features file
        features = "/Users/palmauzzal/SeleniumProject/BDDFramework/src/main/java/features",
        //glue: path of step Definition file/package name
        glue = {"stepDefinition"},
        //format : genetate different type of reporting
        format = {"pretty", "html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
        //monochrome: display the output in readable format
        monochrome = true,
        // strict: execution will be failed, if there are any undefined / pending steps are there
        strict =  true,
        //dryRun-true: will not run the blower, check all the step definitions are correct or not or something missing in mapping
        //dryRun-false: execute the test in proper way
        dryRun = false // true
 )

public class TestRunner { }
