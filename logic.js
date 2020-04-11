const reply = [
  "I dont understand what you said...",
  "Can you try typing something that makes sense.. idiot.",
  "Is that supposed to make sense?",
  "Please try typing something that makes sense.",
  "What you typed makes no sense.",
  "Are you even trying?",
  "You head West towards the house.",
  "'Doggy dogs borky bork on the softy soft comfy couch' is that what you just wrote?",
  "You head South.",
  "You head North.",
  "You head East. You encoutner a jungle.",
  "What?",
  "I dont understand that verb.",
  "Type something that makes sense...",
  "You are at the edge of a water fall.",
  "Why did you just kick that orphan child... That was not very cool."
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

