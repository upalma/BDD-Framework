
Feature: Free CRM login feature

Scenario: Free CRM login test scenario

Given user is already login page
When title of login page is Free CRM
Then user enters username user enters password
Then user clicks on login button
Then user in on home page
Then close the browser


Given:  Specifies the pre-conditions. It is basically
        a known state.
When :  This is used when some action is to be performed.
        We have seen when the user tries to log in using
        username and password, it becomes an action.
Then:   The expected outcome or result should be placed
        here. For Instance: verify the login is successful,
        successful page navigation.
Background: Whenever any step is required to perform in
        each scenario then those steps need to be placed
        in Background. For Instance: If a user needs to clear database before each scenario then those steps can be put in a background.
And:    And is used to combine two or more same type of action.


public class DropdownList {
    WebDriver driver;

    @Test
    public void dropDown() {
        System.setProperty("webdriver.chrome.driver", "/Users/palmauzzal/SeleniumProject/PageObjectModelFramework/comnew/Generic/brwoserDriver/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.amazon.com/");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement accountsAndLists = driver.findElement(By.xpath("//span[text()='Your Account' and @class='nav-text']"));
        Actions actions = new Actions(driver);
        actions.moveToElement(accountsAndLists).perform();
        driver.findElement(By.linkText("Your Account")).click();
        System.out.println(driver.getCurrentUrl());
        String title = driver.getTitle();
        Assert.assertEquals("Your Account", title);
    }