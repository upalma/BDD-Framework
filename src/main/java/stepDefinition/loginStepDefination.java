package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;


public class loginStepDefination {

    WebDriver driver;

    @Given("^user is already login page$")
    public void user_already_login_page(){
        System.setProperty("webdriver.chrome.driver", "/Users/palmauzzal/SeleniumProject/BDDFramework/brwoserDriver/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.freecrm.com/");
    }

    @When("^title of login page is Free CRM$")
    public void title_login_page_Free_CRM(){
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
    }
            // 1.    \"(.*)\"    2.  \"([^\"]*)\"  Regular Expression
    @Then("^user enters \"(.*)\" user enters \"(.*)\"$") //user enters username user enters password
    public void user_enters_username_user_enters_password(String username, String password){
        driver.findElement(By.name("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button(){
        WebElement loginButton = driver.findElement(By.xpath("//*[@id='loginForm']/div/div/input"));
        JavascriptExecutor je = (JavascriptExecutor)driver;
        je.executeScript("arguments[0].click();", loginButton);
    }

    @Then("^user in on home page$")
    public void user_in_on_home_page(){
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("CRMPRO", title);
    }
    @Then("^close the browser$")
    public void close_the_browser(){
        driver.close();
    }
//    @When("^user mouse over to contact list$")
//    public void user_mouse_over_to_contact_list(){
//
//    }
//
//    @Then("^user clicks on new contact list$")
//    public void user_clicks_on_new_contact_list() {
//
//    }
//
//    @Then("^user clicks on save button$")
//    public void user_clicks_on_save_button() {
//
//    }
//
//    @Then("^verify new contact created$")
//    public void verify_new_contact_created() {
//
//    }
}
