const assert = require('assert')

// Course https://learn.webdriver.io/
// Website https://webdriver.io/
// API Docs https://webdriver.io/docs/api.html

describe('qa/dev/vjs_vpaid.html', () => {
    before(async () => {
        await browser.url('https://qa-test.automattic.iponweb.net/qa/dev/vjs_vpaid.html')
    })
    it('should have the right title', async () => {
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Automattic Ad Testing Page')
    })

    it('should have the right header', async () => {
        const h1 = await $('body h1');
        const text = await h1.getText();
        assert.strictEqual(text, 'VJS: VPAID Video')
    })
})