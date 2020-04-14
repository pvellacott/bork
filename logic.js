const reply = [
  "I dont understand what you said...",
  "Can you try typing something that makes sense.. idiot.",
  "Is that supposed to make sense?",
  "Please try typing something that makes sense.",
  "What you typed makes no sense.",
  "You kick the ground and dirt flicks off your shoe straight up into your eye. Nice going.",
  "You head West towards the house.",
  "'Doggy dog borky bork on the softy soft comfy couch' is that what you just wrote?",
  "You head South.",
  "You head North.",
  "You head East. You are now in a forest.",
  "What?",
  "I dont understand that verb.",
  "Try typing something that makes sense...",
  "You are at the edge of a water fall.",
  "Why did you just kick that orphan child... That was not very cool.",
  "You picked up a dog collar. Cool. What would you like to do with it?",
  "You are running towards an edge of a cliff with no intentions to stop... what are you doing!!! Turn around!"
]

document.getElementById("user-input").addEventListener('keypress', function (text) {
  if (text.key === 'Enter') {
    //meme
    console.log("howdy, stanger.")
    
    //Random Response
    let randomReply = reply[Math.floor(Math.random() * reply.length)]
    var list1 = document.createElement("li");
    var list2 = document.createElement("p");
    var answer = document.getElementById("user-input").value
    list1.innerHTML = '> ' + answer
    list2.innerHTML = randomReply

    //Displayed Content
    document.getElementById("game-text").appendChild(list1)
    document.getElementById("game-text").appendChild(list2)
    document.getElementById("user-input").value = ''

    document.getElementById("game-text").scrollTop = document.getElementById("game-text").scrollHeight
  }
})

