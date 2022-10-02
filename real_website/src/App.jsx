import './App.css'
import './signin.css'


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// START-UP
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function App() {

  // The next webpage to redirect the user after logging in :
  const redirectUrl = 'https://www.google.com/'; 


  return (

    <div className="d-flex flex-column h-100">

          {/* NAVBAR */}
          <nav className="navbar navbar-light bg-light mb-5">
            <a className="navbar-brand" href="/">

              {/* NOTE: Used braille space character */}
              ⠀
              <img src="./src/assets/globe.svg" width="40" height="40" className="d-inline-block align-top" alt=""/>
              ⠀BANK WEBSITE (Real)

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
              <button className="w-100 btn btn-lg btn-primary mb-5" type="submit" >Sign in</button>

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