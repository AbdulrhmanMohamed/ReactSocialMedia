import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './auth.css'
import Logo from '../../img/logo.png'
function Auth() {
  
  const [isSignUp,setIsSignUp]=useState(false)
  const [data,setData]=useState({firstName:'',lastName:'',userName:'',password:'',confirmPassword:''})
  const [confirmPassword,setConfirmPassword]=useState(true)
  const dispatch=useDispatch()
  const inputChanged=(e)=>{
    // destruct obect 
    setData({...data ,[e.target.name]:e.target.value})
  }
  const submitForm=(e)=>{
    e.preventDefault()
    console.log('data',data)
    if(isSignUp && data['password'] !=data['confirmPassword']){
      setConfirmPassword(false)
    }
      
    else{
      setConfirmPassword(true)
    }
  }

  const resetForm=()=>{
    setData({firstName:'',lastName:'',userName:'',password:'',confirmPassword:''})
  }
  return (
    <div className='auth'>
        <div className="left-auth">
            <img src={Logo} alt="Auth Logo" />
            <div className="webName">
                <h1>Zkc Media</h1>
                <h6>Explore The Ideas Through Out the World</h6>
            </div>
        </div>
        <div className='auth-right'>
          <form className='infoForm' action="" onSubmit={submitForm}>
             <h3 style={{paddingLeft:'10px'}}>{isSignUp?'Sign Up':'Login'}</h3>

           {isSignUp&&<div className="formInput" >
                <input type="text" placeholder='First Name' name='firstName' onChange={inputChanged} value={data.firstName}/>
                <input type="text" placeholder='Last Name' name='lastName' onChange={inputChanged} value={data.lastName}/>
            </div>}
            <div className="formInput">
                <input type="text" placeholder='UserName' name='userName'  onChange={inputChanged} value={data.userName}/>
            </div>
            <div className="formInput">
                <input type="password" placeholder='password' name='password'  onChange={inputChanged} value={data.password}/>
                {isSignUp&&<input type="confirmPassword" placeholder='confirmPassword' name='confirmPassword' onChange={inputChanged} value={data.confirmPassword}/>}
            </div>
             { !confirmPassword &&  <div style={{fontSize:'12px',color:'red',alignSelf:'flex-end'}}>*Password Doesn't Match</div>}
            <div className='hav-acc'>
                <span  style={{cursor:'pointer'}}  onClick={()=>{setIsSignUp(!isSignUp);resetForm()} }> {isSignUp? " Already Have an Account ,Login":`Don't Have an Account ,SingUp`}</span>
            </div>
            <button className="button inf-btn" >{isSignUp? 'SignUp' :"Login" }</button>
          </form>
        </div>
        {/* <LogIn/> */}
    </div>
  )
}

function SignUp(){
    return (
        <div className='auth-right'>
          <form className='infoForm' action="">
            <h3>Sign Up </h3>

            <div className="formInput" >
                <input type="text" placeholder='First Name' name='firstName'/>
                <input type="text" placeholder='Last Name' name='lastName'/>
            </div>
            <div className="formInput">
                <input type="text" placeholder='UserName' name='userName' />
            </div>
            <div className="formInput">
                <input type="password" placeholder='password' name='password' />
                <input type="confirmPassword" placeholder='confirmPassword' name='confirmPassword' />
                
            </div>
            <div className='hav-acc'>
                <span>Already Have an Account , Login</span>
            </div>
            <button className="button inf-btn">SignUp</button>
          </form>
        </div>
    )
}

function LogIn() {
    return (
      <div className="auth-right">
        <form className="infoForm ">
          <h3>Log In</h3>
  
          <div  className='formInput'>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div className='formInput'>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div className='hav-acc'>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
          </div>
            <button className="button inf-btn">Login</button>
        </form>
      </div>
    );
  }

export default Auth