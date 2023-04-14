import React, { useRef } from 'react';
import Input from '../Components/input';
import { UseAuth } from '../hooks/useAuth';

function Login() {

  const [, setToken] = UseAuth();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const subdomainRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=rpgn2mea0rjdbosfngrjam7fn9");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("_username", usernameRef.current.value);
    urlencoded.append("_password", passwordRef.current.value);
    urlencoded.append("_subdomain", subdomainRef.current.value);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    const res = await fetch("https://toko.ox-sys.com/security/auth_check", requestOptions);
    if (res.ok) {
      let token = await res.json();
      return setToken(token)
      
    }
    usernameRef.current.value = null;
    passwordRef.current.value = null;
    subdomainRef.current.value = null;
    usernameRef.current.style.border = '1px solid red' ;
    passwordRef.current.style.border = '1px solid red';
    subdomainRef.current.style.border = '1px solid red';

      /*.then(response => response.json())
      .then(result => setToken(result))
      .catch(error => console.log('error', error));*/

    /*const input = new FormData(e.currentTarget);
    console.log(input.get('username'));
    console.log(input.get('password'));
    console.log(input.get('subdomain'));*/

  }
  return (
    <div className='container d-flex flex-column justify-content-center text-align-center'>
      <h1>Login</h1>
      <form onSubmit={handleLogin} >
        <Input ref={usernameRef} name="username" id='Username' type='text' placeholder='Username'>Username</Input>
        <Input ref={passwordRef} name="password" id='Password' type='password' placeholder='Password'>Password</Input>
        <Input ref={subdomainRef} name="subdomain" id='Subdomain' type='text' placeholder='Subdomain'>Subdomain</Input>

        <button className='btn btn-outline-primary'>Login</button>
      </form>
    </div>
  )
}

export default Login