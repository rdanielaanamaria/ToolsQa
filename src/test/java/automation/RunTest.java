package automation;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty","html:target/cucumber-reports"},
        features = {"src/main/resources/features"},
        glue = {"automation.glue"}
//        monochrome = true
)

public class RunTest {
  @Test
    public void tests(){}
}
