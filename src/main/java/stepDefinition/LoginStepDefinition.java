package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class LoginStepDefinition {

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

    @When("^user enters username user enters password") //
    public void user_enters_username_user_enter_password(){
        driver.findElement(By.name("username")).sendKeys("naveenk");
       driver.findElement(By.name("password")).sendKeys("test@123");
    }

            // 1.    \"(.*)\"    2.  \"([^\"]*)\"  Regular Expression
    @When("^user enters \"(.*)\" user enters \"(.*)\"$") //user enters username user enters password
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
    public void user_in_on_home_page() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
    }

    @Then("^user moves to new contact page$")
    public void user_moves_to_new_contact_page(){
        driver.switchTo().frame("mainpanel");
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.cssSelector("#navmenu>ul>li:nth-child(4)>a"))).build().perform();
        driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
        }

    @Then("^user enters new contact \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_new_contact_and_and(String firstName, String lastName, String position) {
        driver.findElement(By.id("first_name")).sendKeys(firstName);
        driver.findElement(By.id("last_name")).sendKeys(lastName);
        driver.findElement(By.id("company_position")).sendKeys(position);
        driver.findElement(By.xpath("//input[@type='submit' and @value='save']")).click();

    }
    @Then("^close the browser$")
    public void close_the_browser(){
        driver.close();
    }
}
