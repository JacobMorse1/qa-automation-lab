const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(`The Batman`)
    
    await driver.findElement(By.xpath('//button[text()= "Add"]')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    expect(movie.isDisplayed()).toBeTruthy()
}


module.exports = {
    addMovie
}    