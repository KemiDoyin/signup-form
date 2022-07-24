import { useForm } from 'react-hook-form'
import './style.css'
import swal from 'sweetalert'




const Signup = () => {
  const {register, formState: {errors}, handleSubmit} = useForm({
    mode: "all"
  });
  const handleClick = () => {
    let firstName = document.querySelector("#firstname")
    let lastName = document.querySelector("#lastname")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let fName = firstName.value
    let lName = lastName.value
    let eMail = email.value
    let pWord = password.value

   

    if (fName == '' || lName == '' || eMail == '' || pWord == '') {
      swal({
        title: "Error",
        text: "Please fill in the missing field",
        icon: "warning",
        buttons: {cancel: true}
      })
    } else {
      swal({
        title: `Hi ${fName}`,
        text: "your data has been successfully submitted",
        icon: "success",
        button: "Ok",
      });
    }
    
  }
      
  return (
    <div className="container">
      <div className="form__container">
        <div className="info">
        <h1>Learn to code by  watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable. </p>
        </div>
          <div className="signup__container">
            <button className="btn__1"><b>Try it free 7 days</b> <span>then $20/mo. thereafter</span></button>
            <div className="signup__box">
              <form onSubmit={handleSubmit((data) => console.log(data))} autoComplete="off">
              <label htmlFor="firstname"></label>
              <input type="text" 
              id="firstname" 
              name="firstname" 
              placeholder="First Name" 
              {...register("firstname", {
                required: "FirstName cannot be empty"
              })}
              />
              <p className="errors">{errors.firstname?.message}</p>
              <label htmlFor="lastname"></label>
              <input type="text" 
              id="lastname" 
              name="lastname" 
              placeholder="Last Name" 
              {...register("lastname", {
                required: "LastName cannot be empty"
              })}
               />
               <p className="errors">{errors.lastname?.message}</p>
              <label htmlFor="email"></label>
              <input type="email" 
              name="email" 
              id="email"
               placeholder="Email Address"
               {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Looks like this is not an email"
                }
               })}
                 />
                 <p className="errors">{errors.email?.message}</p>
              <label htmlFor="password"></label>
              <input type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              {...register("password", {
                required: "Password cannot be empty",
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                  message: "Must contain at least one number, one uppercase and lowercase letter, a symbol and at least 8 or more characters"
                }
              })}
              />
              <p className="errors">{errors.password?.message}</p>
              <button className="btn__2" onClick={handleClick}>Claim your free trial </button>
              <p> By clicking the button, you are agreeing to our <span className="terms__and__services">Terms and Services</span></p>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
                              
}


export default Signup