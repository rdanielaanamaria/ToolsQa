package automation.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@Component
@ComponentScan("src.main.java.automation")
public class AutomationFrameworkConfig {
    public AutomationFrameworkConfig(){}
}
