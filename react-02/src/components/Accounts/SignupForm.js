import React from 'react';

function SignupForm(props) {
    return(
        <div class="widget">
            Welcome to the Account Tracker! Please enter your name.
            <form>
                <input type="text" placeholder="NAME" />
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default SignupForm;