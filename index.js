
    document.addEventListener("DOMContentLoaded",()=>{
        let form = document.getElementById('form_data')
        if(form){
            form.addEventListener('submit',(event)=>{
                event.preventDefault(); 
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const User_Data={
                    userName: name, 
                    email:email, 
                    password:password };
                if(!name || !email || !password) return alert("Please enter your details")
                console.log("Data is submitted", User_Data)
                fetch("http://localhost:8000/signUp", {
                    method: 'POST', // HTTP method
                    headers: {
                        'Content-Type': 'application/json', // Send as JSON
                    },
                    body: JSON.stringify(User_Data) // Convert the data to JSON
                }).then((res)=>{
                    console.log(res.response)
                    alert(JSON.stringify(res))
                    form.reset();
                }).catch((err)=>{
                    alert("server Error")
                    console.log(err)
                })
            })

        }
        

        let login = document.getElementById('login_data')
        login.addEventListener('submit',(event)=>{
            event.preventDefault();
            const Login_name = document.getElementById('login_name').value;
            const Login_password = document.getElementById('login_password').value;
            const Login_User_Data={
                userName: Login_name ,  
                password:Login_password };
            if(!Login_name || !Login_password) return alert("Please enter your details")
            console.log("Data is submitted", Login_User_Data)
        })
    })
