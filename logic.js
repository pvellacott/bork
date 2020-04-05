const reply = [
  "I dont understand what you said...",
  "Can you try typing something that makes sense.. idiot.",
  "Is that supposed to make sense?",
  "Please try typing something that makes sense.",
  "What you typed makes no sense.",
  "Are you even trying?"
]

const randomReply = reply[Math.floor(Math.random() * reply.length)]
console.log(randomReply)

function textInput(text){
  if(event.key === 'Enter') {
    let instruct = document.getElementById("user-input");
    text.value = ''
    
    var list = "<li>" + randomReply + "</li>";
    document.getElementById("content").innerHTML = list;
  }
}

