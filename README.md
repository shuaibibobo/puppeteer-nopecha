# puppeteer-nopecha
You can use it as in the example below. NopeCHA automatically installs the Captcha Solver plugin and activates your key.

```js
const puppeteer = require('puppeteer-extra');
const NopeCHAPluginClass = require('puppeteer-nopecha')

const NopeCHAPlugin = new NopeCHAPluginClass({
    nopeKey: '<key>'
});

puppeteer.use(NopeCHAPlugin);

puppeteer.launch({ headless: false }).then(async (browser) => {
    const page = await browser.newPage();
    await page.goto('https://accounts.hcaptcha.com/demo')
});

```