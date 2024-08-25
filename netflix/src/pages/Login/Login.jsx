import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

import netflix_spinner from '../../assets/netflix_spinner.gif'

import { login, signUp } from '../../firebase'

const Login = () => {

  const [sign, setSign] = useState("Sign In")

  const [loading, setLoading] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userAuth = async (e) => {
    setLoading(true)
    e.preventDefault();

    if (sign === "Sign In") {
      await login(email, password)
    }

    else {
      await signUp(name, email, password)
    }

    setLoading(false)
  }








  return (

    loading ? <div className="spin">
      <img src={netflix_spinner} />
    </div> :

      <div className='login'>

        <img src={logo} className='logo' />

        <div className="form">
          <h1>{sign}</h1>
          <form>

            {sign === "Sign Up" ? <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Your Name' /> : ''}

            <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />

            <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />

            <button onClick={userAuth} type='submit' >{sign}</button>

            <div className="help">

              <div className="remember">
                <input type='checkbox' />
                <label >Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>


          </form>


          <div className="switch">
            {sign === "Sign In" ?

              <p>New to Netflix? <span onClick={() => { setSign("Sign Up") }} > Sign Up Now</span> </p> :

              <p>Already have account?<span onClick={() => { setSign("Sign In") }}  >Sign In Now</span> </p>}



          </div>
        </div>

      </div>
  )
}

export default Login
