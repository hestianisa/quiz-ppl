const{Builder, By, Key } = require("selenium-webdriver");
var assert = require('assert');
async function login(){
    try{
        let driver = await new Builder().forBrowser("chrome").build();
        // await driver.get("http://google.com");
        // await driver.findElement(By.name("q")).sendKeys("selenium",Key.RETURN);
        await driver.get("https://demo.1crmcloud.com/login.php");
        await driver.findElement(By.name("user_name")).sendKeys("admin");
        await driver.findElement(By.name("user_password")).sendKeys("admin");
        await driver.findElement(By.id("login_button")).click();

        await driver.sleep(1000);
        await driver.findElement(By.className("default-avatar")).click();
        const testcase = await driver.findElement(By.xpath("/html/body/div[7]/div/div[3]/div/form/div[2]/div/div/div[2]/div/div[1]/div[1]/h3")).getText();
        assert.equal(testcase, "Administrator", "Test Fail");
        console.log(testcase);
    }
    catch(e){
        console.log("Test Failed");
    }
}
login();