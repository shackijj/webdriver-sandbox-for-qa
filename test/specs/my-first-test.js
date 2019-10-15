const assert = require('assert')

describe('qa/dev/vjs_vpaid.html', () => {
    it('should have the right title', async () => {
        await browser.url('https://qa-test.automattic.iponweb.net/qa/dev/vjs_vpaid.html')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Automattic Ad Testing Page')
    })
})