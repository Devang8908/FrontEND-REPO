import React from "react";
import "./SingUp.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register (props) {

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
 

  const goTo = ()=>{
      history("/login")
  }
    const SingUp = (e)=>{

    e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email,password)
          .then((userCredential) => {
            // Signed in 
            history("/")
            const user = userCredential.user;
            

                        
           let payload = {
                "uniqueId": user.uid,
                "name": name,
                "email":email,
                "password":password
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            }

            fetch("http://localhost:8083/amazon/users/saveuser",requestOptions)
            .then(response => response.json())
            .then(data => {
                //localStorage.setItem("users",JSON.stringify(user));
                //window.location.reload();
            })
            .catch(error =>{
             
            })
          })
          .catch((error) => {
            alert(error.message)
            // ..
          });
  }


    return (
      <>
      <form className="login__form" >
      <h2>Register</h2>
      <input type="text"
      placeholder="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
       ></input>
      <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={SingUp} >Create Account</button>
        <p>Already have an account?  <a onClick={goTo}>Sign in</a></p>
      {/* {auth.registerStatus === "rejected" ? (
        <p>eroor</p>
      ) : null} */}
    </form>
  </>
    );
  }


export default Register;
