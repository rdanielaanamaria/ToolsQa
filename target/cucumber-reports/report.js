$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/ToolsQaInspection.feature");
formatter.feature({
  "name": "Tools Qa Inspecting elements",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing Elements Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "cucumber.runtime.CucumberException: Error creating bean with name \u0027automation.glue.StepDefinition\u0027: Unsatisfied dependency expressed through field \u0027configurationProperties\u0027; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type \u0027automation.utils.ConfigurationProperties\u0027 available: expected at least 1 bean which qualifies as autowire candidate. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required\u003dtrue)}\r\n\tat cucumber.runtime.java.spring.SpringFactory.getInstance(SpringFactory.java:182)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name \u0027automation.glue.StepDefinition\u0027: Unsatisfied dependency expressed through field \u0027configurationProperties\u0027; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type \u0027automation.utils.ConfigurationProperties\u0027 available: expected at least 1 bean which qualifies as autowire candidate. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required\u003dtrue)}\r\n\tat org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:588)\r\n\tat org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:88)\r\n\tat org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessPropertyValues(AutowiredAnnotationBeanPostProcessor.java:366)\r\n\tat org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1264)\r\n\tat org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:553)\r\n\tat org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:483)\r\n\tat org.springframework.beans.factory.support.AbstractBeanFactory$2.getObject(AbstractBeanFactory.java:345)\r\n\tat cucumber.runtime.java.spring.GlueCodeScope.get(GlueCodeScope.java:15)\r\n\tat org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:340)\r\n\tat org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:220)\r\n\tat org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveNamedBean(DefaultListableBeanFactory.java:1018)\r\n\tat org.springframework.beans.factory.support.DefaultListableBeanFactory.getBean(DefaultListableBeanFactory.java:345)\r\n\tat org.springframework.beans.factory.support.DefaultListableBeanFactory.getBean(DefaultListableBeanFactory.java:340)\r\n\tat cucumber.runtime.java.spring.SpringFactory.getInstance(SpringFactory.java:180)\r\n\t... 32 more\r\nCaused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type \u0027automation.utils.ConfigurationProperties\u0027 available: expected at least 1 bean which qualifies as autowire candidate. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required\u003dtrue)}\r\n\tat org.springframework.beans.factory.support.DefaultListableBeanFactory.raiseNoMatchingBeanFound(DefaultListableBeanFactory.java:1493)\r\n\tat org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1104)\r\n\tat org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1066)\r\n\tat org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredFieldElement.inject(AutowiredAnnotationBeanPostProcessor.java:585)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I go to the Website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_go_to_the_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Text Box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.i_click_on_Text_Box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I fill in the fields",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.i_fill_in_the_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can submit my details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_can_submit_my_details()"
});
formatter.result({
  "status": "skipped"
});
});