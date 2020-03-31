function textInput(text){
  if(event.key === 'Enter') {
    let instruct = document.getElementById("user-input").value;
    text.value = ''
  }
}

