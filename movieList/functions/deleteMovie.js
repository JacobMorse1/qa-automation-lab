const {By} = require('selenium-webdriver')

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//button[text()= "x"')).click()
}

module.exports = {
    deleteMovie
}    