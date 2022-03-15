const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('', () => {
    await
})