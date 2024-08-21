const jimp = require("jimp")

async function changeFormat() {
  try {
    const image = await jimp.read("./apple.png")
    await image.resize(500, 500)
    await image.write("./jpgApple.jpg")
  } catch (error) {
    console.log(error)
  }
}

changeFormat()