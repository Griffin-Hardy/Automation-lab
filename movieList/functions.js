const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath(`//input`)).sendKeys('Barbarian')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const crossOff = async (driver) => {
    await driver.findElement(By.xpath('/html/body/main/ul/li/span')).click()

    const movie = await driver.findElement(By.xpath('/html/body/main/ul/li/span'))

    const checked = await driver.findElement(By.xpath('//span[contains(@class,"checked")]'))

     expect(movie).toStrictEqual(checked)
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath(`/html/body/main/ul/li/button`)).click()
    
    const movie = await driver.findElement(By.xpath('//*[text()="Barbarian deleted!"]'))
    
    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy() 
   
}

module.exports = {
    addMovie,
    crossOff,
    deleteMovie
}