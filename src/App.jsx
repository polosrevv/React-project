import './App.css';
import Corner from "./assets/Corner-img.png"
import abstraction from "./assets/Abstraction.png" 
import Google from "./assets/Google.png"
import Facebook from "./assets/Facebook.png"
import lock from "./assets/lock.png"
const App = () => (
  <div className = "Container">
    <div className = "Right">
      <div className = "Corner-img">
        <img src = {Corner} alt = "Logo"/>
      </div>
      <div className = "Introduction">
        <h1>Getting Started With VR Creation</h1>
      </div>
      <div className = "Site-img">
        <img src = {abstraction} alt = "web-logo" />
      </div>
    </div>
    <div className = "Left">
      <div className = "language">
        <select>
          <option value = "English">English</option>
        </select>
      </div>
      <div className = "Create">
        <h2>Create Account</h2>
      </div>
      <div className = "Form">
        <form>
          <div className = "Button-container">
            <div className = "Sign-Up-With-Google">
              <button>
                <img src = {Google} alt = "google"/>
                <span>Sign up with Google</span>
              </button>
            </div>
            <div className = "Sign-Up-With-Facebook">
              <button>
                <img src = {Facebook} alt = "facebook"/>
                <span>Sign up with Facebook</span>
              </button>
            </div>
          </div>
          <div className = "alternative-sign-up">
            <h3>- OR -</h3>
          </div>
          <div className = "Input">
            <input type = "text" name = "Name"  placeholder="Full Name "></input>
            <input type = "Email" name = "email"  placeholder = "Email"></input>
            <input type = "Password" name = "pass" placeholder = "Password"></input>
          </div>
          <div className = "lock">
            <img src = {lock} alt = "lock"/>
          </div>
          <div className = "Create-Account">
            <button type = "submit">Create Account</button>
          </div>
          <div className = "Log-in">
            <div className = "grey-text">
              <p1>Already have an account?</p1>
            </div>
            <div className = "blue-text">
              <p2>Log In</p2>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default App;