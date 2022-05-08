package automation.pages;

import automation.drivers.DriverSingleton;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    private static WebDriver driver;

    public HomePage() {
        driver = DriverSingleton.getDriver();
        PageFactory.initElements(this.driver, this);
    }

//    @FindBy(xpath = "//div[@class='category-cards']/div[1]")
    @FindBy(tagName = "Elements")
    private WebElement elements;

    public void clickOnElements(){
//        Actions pointer = new Actions(driver);
//        pointer.moveToElement(elements).build().perform();
        elements.click();
    }
}
