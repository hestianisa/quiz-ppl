const{Builder, By, Key } = require("selenium-webdriver");
var assert = require('assert');
async function login(){
    try{
        let driver = await new Builder().forBrowser("chrome").build();
    // await driver.get("http://google.com");
    // await driver.findElement(By.name("q")).sendKeys("selenium",Key.RETURN);
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/log");
  await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
  await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
  await driver.findElement(By.name("Submit")).click();

  let getValue = await driver.findElement(By.xpath('//li')).getText();
  console.log(getValue);
  assert.equal(getValue, "Welcome Admin", "Text Fail");
    }
    catch(e){
        console.log("Test Failed")
    }
}
login();