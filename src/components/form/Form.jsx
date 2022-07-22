
import './form.css'




const form = () => {
  

  return (
    <div className="container">
      <div className="form__container">
        <div className="info">
        <h1>Learn to code by  watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable. </p>
        </div>
          <div className="signup__container">
            <button><b>Try it free 7 days</b> <span>then $20/mo. thereafter</span></button>
            <div className="forms">
              <form>
              <label htmlFor="firstname"></label>
              <input type="text" 
              id="firstname" 
              name="firstname" 
              placeholder="First Name" 
              
              />
              <label htmlFor="lastname"></label>
              <input type="text" 
              id="lastname" 
              name="lastname" 
              placeholder="Last Name" 
              
               />
              <label htmlFor="email"></label>
              <input type="email" 
              name="email" 
              id="email"
               placeholder="Email Address"
               
                 />
              <label htmlFor="password"></label>
              <input type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              
              />
              <button>Claim your free trial </button>
              <p> By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
                              
}


export default form