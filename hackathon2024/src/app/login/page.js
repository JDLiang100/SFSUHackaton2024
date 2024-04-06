import Navbar from "../component/navbar"
export default function Login() {
    return (
        
        <div>
            <Navbar/>
            <form>
                <h1>Log In</h1>
                <div class="form-group">
                    <label >Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input type="password" class="form-control" id="password1" placeholder="Password"/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        );
}