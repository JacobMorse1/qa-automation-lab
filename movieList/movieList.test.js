const {Builder, Capabilities, By} = require('selenium-webdriver') 

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

const crossOutMovie = async driver => {
    await driver.findElement(By.xpath('//span')).click()
}
const uncrossMovie = async driver => {
    await driver.findElement(By.xpath('//span')).click()
}

const deleteMovie = async driver => {
    await driver.findElement(By.xpath('//button[text()= "x"]')).click()
}

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(`The Batman`)
    
    await driver.findElement(By.xpath('//button[text()= "Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
}

test('adds movie to list', async () => {
    await addMovie(driver)

    await driver.sleep(2000)
})

test('crosses out movie from list', async () => {
    await crossOutMovie(driver)

    await driver.sleep(1000)
})

test('uncrosses movie', async () => {
    await uncrossMovie(driver)
    await driver.sleep(1000)
})


test('deletes movie from list', async () => {

    await deleteMovie(driver)

    await driver.sleep(2000)
})