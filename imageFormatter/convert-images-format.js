const jimp = require("jimp")

async function changeFormat() {
    const image = await jimp.read("./apple.png")
    await image.resize(500, 500)
    await image.write("./jpgApple.jpg")
}

changeFormat()