const interval = setInterval(()=>{
    const header = document.querySelector("._2O84H")
    if(header){
        
        clearInterval(interval)
    
        const buttonN = document.createElement("buttonN")
        const button = document.createElement("button")
        const button1 = document.createElement("button1")
        
        buttonN.innerHTML = "1x"
        button.innerHTML = "1.5x"
        button1.innerHTML = "2x"

        //add class in buttons
        buttonN.classList.add("button")  
        button1.classList.add("button")
        button.classList.add("button")

        //Normal speed
        buttonN.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio)=>{
                audio.playbackRate = 1;
            })
        })

        //Speed 1.5
        button.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio)=>{
                audio.playbackRate = 1.5;
            })
        })

        //Speed 2
        button1.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio)=>{
                audio.playbackRate = 2;
            })
        })
        
        //creating the button on the page
        header.appendChild(buttonN)
        header.appendChild(button)
        header.appendChild(button1)
}
},1000)
