const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const{addMovie, crossOff, deleteMovie} = require('./functions')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {
    await addMovie(driver)

    await driver.sleep(3000)
})

test('cross a movie off', async () => {
    await crossOff(driver)

    await driver.sleep(3000)
})

test('delete a movie', async () => {
    await deleteMovie(driver)

    await driver.sleep(3000)
})