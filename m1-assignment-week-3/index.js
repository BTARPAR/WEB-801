// Generate the Partners Icons START
const fileNames = []
const photos = []
const imageList = []

const listOfAlternate = [
  'Family of Cats',
  'Poodle',
  'Chihuahua',
  'Baby German Shepherd',
  'Munchkin Cat',
  'A family of Dog & Cat',
  'Family of baby dog and cat',
  'Labrador Family',
  'Almost entire pet family',
  'Family of adopted pet'
]

const petName = [
  'Daffy',
  'Cuddles',
  'Brat',
  'Junior',
  'Malibu',
  'Dori Omelette Rose Alvin',
  'Tamera Glitter Claudia Porker',
  'Tonic Critter Spur Isabelle Fester',
  'Harry Nelly Shelby Pulsar',
  'Jena Wobble Rasta Kabuki Shakira Kramer',
  'Dexter Bolton Biscuit Corby Brandy Geneva Trinity Fay Tiki Cuddles'
]

const closeList = '</li>'
const captionStartTag = '<span>'
const captionEndTag = '</span>'
const descStartTag = '<span class="description">'
const descEndTag = '</span>'

for (let i = 0; i < 10; i++) {
  // Creation of the Description
  const descTextsElement = descStartTag + petName[i] + descEndTag
  // Creation of the CaptionText
  const captionTextsElement = captionStartTag + listOfAlternate[i] + captionEndTag

  fileNames.push(`pet-${i + 1}.jpg`) // Will create all 10 images that we just comment it put
  photos.push(`<div class="hover-effect"><img src=images/pets/${fileNames[i]} alt='${listOfAlternate[i]}'>${descTextsElement}</div>`)
  image = `<li class=photo${i + 1}>` + photos[i] + captionTextsElement + closeList
  imageList.push(image)
}

document.getElementById('gallery-view').innerHTML = imageList.join(' ')
// Generate the Partners Icons END
