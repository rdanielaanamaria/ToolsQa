package automation.pages;


import automation.drivers.DriverSingleton;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import automation.utils.Constants;

public class ElementsPage {
    private static WebDriver driver;

    public ElementsPage() {
        driver = DriverSingleton.getDriver();
        PageFactory.initElements(this.driver, this);
    }


    @FindBy(id = "item-0")
    private WebElement textBox;

    @FindBy(id = "userName")
    private WebElement fullNameField;

    @FindBy(id = "userEmail")
    private WebElement emailField;

    @FindBy(id = "currentAddress")
    private WebElement currentAddressField;

    @FindBy(id = "permanentAddress")
    private WebElement permanentAddressField;

    @FindBy(id = "submit")
    private WebElement submitButton;


    public void goThroughElements(){
//        Actions hover = new Actions(driver);
//        hover.moveToElement(textBox).build().perform();
        textBox.click();
//        WebDriverWait wait = new WebDriverWait(driver, Constants.TIMEOUT);
//        wait.until(ExpectedConditions.elementToBeClickable(textBox));

//        if (driver.getTitle().equalsIgnoreCase("ToolsQA")) {
//            System.out.println("Script worked, the title contains 'ToolsQA'");
//        } else {
//            System.out.println("Something went wrong with the script, 'ToolsQA' was not found");
//        }
    }
    public void completeFields(){
        fullNameField.sendKeys(Constants.FULLNAME);
        emailField.sendKeys(Constants.EMAIL);
        currentAddressField.sendKeys(Constants.CURRENTADDRESS);
        permanentAddressField.sendKeys(Constants.PERMANENTADDRESS);
    }
    public void submitFields(){
        submitButton.click();
    }

}