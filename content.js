const interval = setInterval(()=>{
    const header = document.querySelector("._3auIg")
    if(header){
        console.log(header)
        clearInterval(interval)
    
        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")
        header.appendChild(button)
}
},1000)
