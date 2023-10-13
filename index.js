const { PuppeteerExtraPlugin } = require('puppeteer-extra-plugin');
class NopeCHAPluginClass extends PuppeteerExtraPlugin {
    constructor(opts = {}) {
        super(opts);
        
    }
    get name() {
        return 'puppeteer-nopecha';
    }
    setKey(nopeKey){
        this.nopeKey = nopeKey
    }
    async beforeLaunch(options) {
        options.args.push('--disable-extensions-except=' + __dirname + '/NopeCHA-CAPTCHA-Solver');
        options.args.push('--load-extension=' + __dirname + '/NopeCHA-CAPTCHA-Solver');
    }
    async onBrowser(browser) {
        const page = await browser.newPage();
        await page.goto('https://nopecha.com/setup#' + this.nopeKey);
        try {
            await page.waitForSelector('table')
        } catch (err) { }
        setTimeout(async () => {
            try { await page.close(); } catch (err) { }
        }, 1000);
    }
}
var newNope = new NopeCHAPluginClass()
module.exports = newNope


