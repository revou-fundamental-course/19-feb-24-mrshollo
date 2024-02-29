function validateForm() {
    let name = document.forms["message-form"]["full-name"].value;
    let birthDate = document.forms["message-form"]["birth-date"].value;
    let gender = document.forms["message-form"]["gender"].value;
    let messages = document.forms["message-form"]["messages"].value;
  
    if (name == "" || birthDate == "" || gender == "" || messages == "") {
      alert("Field cannot be empty, please fill the empty field.");
      return false;
  
    }
  
    setSenderUI(name, birthDate, gender, messages);
  
  
  }
  
  function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
  }