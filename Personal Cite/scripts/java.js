try{
  options ={
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  document.getElementById(
    "currentdate2"
  ).textContent = new Date().toLocaleDateString("en-US", options)
  
}catch (e) {
  alert("Error")
}