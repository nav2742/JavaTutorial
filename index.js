document.getElementById('your-data').addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(document.getElementById("user-name").value)
    document.querySelector(".para-text").style.color = "red";
    document.getElementById("color-change").disabled =true
})

function ButtonTemplate(data) {
    const messagecon = document.createElement('div');
    messagecon.classList.add('button-template');
    const message = document.createElement('p')
    message.id = "msg-temp"
    message.style.display = "block"
    message.textContent = data.msg
    messagecon.appendChild(message);
    document.getElementById('button-template').appendChild(messagecon);


    data.buttons.forEach((element, index) => {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-template');
        const buttonText = document.createElement('span');
        buttonText.classList.add('action-text');
        buttonText.id = `buttons_${index + 1}`;
        buttonText.type = "submit"
        buttonText.textContent = element;

        buttonContainer.appendChild(buttonText);
        document.getElementById('button-template').appendChild(buttonContainer);

        buttonText.addEventListener('click', (event) => {
            event.preventDefault()
            if (event.target.classList.contains('action-text')) {
                console.log(event.target.textContent)
                const allButtons = document.querySelectorAll('.action-text');
                allButtons.forEach((btn) => {
                    btn.classList.add('disabled');  // Disable by adding the 'disabled' class
                    btn.style.pointerEvents = "none"
                    btn.style.cursor = "not-allowed";  // Optionally change the cursor to not-allowed
                });

            }


        })


    });



}
    ButtonTemplate( {
        msg:"Naveen Kothakota is a very good person",
        buttons:["Button1","Button2","Button3"]
    })

    


// Example usage:
// ButtonTemplate({
//     msg: "Naveen Kothakota is a very good person", 
//     buttons: ["Button1", "Button2", "Button3"]
// });



