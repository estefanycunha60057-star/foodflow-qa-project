const { Builder } = require('selenium-webdriver');

(async function loginTest() {

  let driver = await new Builder()
    .forBrowser('chrome')
    .build();

  await driver.get('https://example.com');

})();
