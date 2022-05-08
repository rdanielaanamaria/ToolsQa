package automation.glue;


import automation.config.AutomationFrameworkConfig;
import automation.drivers.DriverSingleton;
import automation.utils.Constants;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import automation.pages.ElementsPage;
import automation.pages.HomePage;
import automation.utils.ConfigurationProperties;

// AutomationFrameworkConfig scans for @Component
//@ContextConfiguration (locations = "ToolsQA*:/src/main/java/automation/AutomationFrameworkConfig.class")

@ContextConfiguration(classes = AutomationFrameworkConfig.class)

public class StepDefinition {
    private WebDriver driver;
    private ElementsPage elementsPage;
    private HomePage homePage;


//    import the ConfigurationProperties in order to access the variables from there
    @Autowired
    ConfigurationProperties configurationProperties;

    @Before
    public void initializedObjects(){
        DriverSingleton.getInstance(configurationProperties.getBrowser());
        elementsPage = new ElementsPage();
        homePage = new HomePage();
    }

    @Given("^I go to the Website$")
    public void i_go_to_the_Website(){
//        ConfigurationProperties frameworkProperties = new ConfigurationProperties();
////        DriverSingleton.getInstance(frameworkProperties.getBrowser());
////        WebDriver
        driver = DriverSingleton.getDriver();
        driver.get(Constants.URL);
    }

    @When("^I click on Text Box$")
    public void i_click_on_Text_Box(){
        homePage.clickOnElements();
        elementsPage.goThroughElements();
    }

    @And("^I fill in the fields$")
    public void i_fill_in_the_fields(){
        elementsPage.completeFields();
    }

    @Then("^I can submit my details$")
    public void i_can_submit_my_details(){
        elementsPage.submitFields();
    }

}
