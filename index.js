const { PuppeteerExtraPlugin } = require('puppeteer-extra-plugin');
class NopeCHAPluginClass extends PuppeteerExtraPlugin {
    constructor(opts = {}) {
        super(opts);
        this.nopeKey = opts.nopeKey
    }
    get name() {
        return 'puppeteer-nopecha';
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

module.exports = NopeCHAPluginClass


