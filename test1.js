var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');

var driver = new webdriver.Builder()
    .withCapabilities( webdriver.Capabilities.firefox())
    .build();
var test = require('selenium-webdriver/testing');
test.describe( 'Test login' , function(){

    test.before(function(){

        driver.get('http://the-internet.herokuapp.com/login');
        driver.findElement(webdriver.By.id(username)).sendKeys('tomsmith');
        driver.findElement(webdriver.By.id(password)).sendKeys('SuperSecretPassword!');
        driver.findElement(webdriver.By.id(submit)).click();
    });

    test.after(function(){
        driver.quit();
    });

    test.it( 'Test Case' , function(){

      driver.executeScript('return document.title').then(function(return_value) {
      assert.equal(return_value, 'Secure Area')
        })

        driver.sleep();
    });
});
