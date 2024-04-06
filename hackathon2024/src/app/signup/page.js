
import Navbar from '../component/navbar';
export default function Signup() {
  return (
    <div>

      <Navbar />
     

      <form class="info-form">
        <h1>Sign Up</h1>
        <div class="form-group">
          <label >Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label >Password</label>
          <input type="password" class="form-control" id="password1" placeholder="Password"/>
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" class="form-control" id="password2" placeholder="Re-type Password"/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
