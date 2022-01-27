let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class','dog-content')  
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class','dog-image')
dogImage.setAttribute('src','./assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class','dog-details')
dogContent.append(dogDetails)

let description = document.createElement('h3')
description.textContent = "Description:"
dogDetails.append(description)

let par = document.createElement('p')
par.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always"+
    " acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append(par)

let feedTime = document.createElement('h3')
feedTime.textContent = "Feeding Times:"
dogDetails.append(feedTime)

let times = document.createElement('ul')
dogDetails.append(times)

let morning = document.createElement('li')
morning.textContent = "9:00 am"
times.append(morning)

let afternoon = document.createElement('li')
afternoon.textContent = "12:00 pm"
times.append(afternoon)

let evening = document.createElement('li')
evening.textContent = "5:00 pm"
times.append(evening)