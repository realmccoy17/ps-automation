var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');

var driver = new webdriver.Builder()
    .withCapabilities( webdriver.Capabilities.firefox())
    .build();
var test = require('selenium-webdriver/testing');
test.describe( 'Test table' , function(){

    test.before(function(){

        driver.get('http://the-internet.herokuapp.com/tables');

    });

    test.after(function(){
        driver.quit();
    });

    test.it( 'Test Case' , function(){

      //test edit and delete links
      WebElement link1 = driver.findElement(By.linkText("edit"));
      assertEquals("#edit", link.getAttribute("href"));
      link1.click();
      driver.executeScript('return document.title').then(function(return_value) {
      assert.equal(return_value, 'Edit')

      WebElement link2 = driver.findElement(By.linkText("delete"));
      assertEquals("#delete", link.getAttribute("href"));
      link2.click();
      driver.executeScript('return document.title').then(function(return_value) {
      assert.equal(return_value, 'Delete')

      //test table headers
      WebElement headerLN = driver.findElement(By.name("Last Name"));
      WebElement headerFN = driver.findElement(By.name("First Name"));
      WebElement headerEM = driver.findElement(By.name("Email"));
      WebElement headerDU = driver.findElement(By.name("Due"));
      WebElement headerWB = driver.findElement(By.name("Website"));

      //test values held
      WebElement formLN = driver.findElement(By.tagName("td"));
      WebElement formFN = driver.findElement(By.tagName("td"));
      WebElement formEM = driver.findElement(By.tagName("td"));
      WebElement formDU= driver.findElement(By.tagName("td"));
      WebElement formWB = driver.findElement(By.tagName("td"));

        })

        driver.sleep();
    });
});
