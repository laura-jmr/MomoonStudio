import PageLayout from '../PageLayout';
import './Request.css';

function Request() {
    return (
        <div id='request'>
            <h1>Request our Animation</h1>

            <p>You want to have a 2D animation from our Studio, f. ex. for advertisement, tv shows or your personal story?</p>

            <p>We want to listen!</p>

            <p>Send us a request via this form or<br></br> reach out to us per email:
                <br></br><span>momoonstudio@gmail.com</span>
            </p>

            <form>
                <input name='name' type='text' placeholder='Tell us your name..' required></input>
                <input name='email' type='email' placeholder='Tell us your email..' required></input>
                <select name='category' required>
                    <option>Select your request category</option>
                    <option>Story Film</option>
                    <option>Advertisement</option>
                    <option>Personal Project</option>
                    <option>Other</option>
                </select>
                <textarea id='message' name='message' placeholder='What is your request?' required></textarea>
                <input id='submit' type="submit" value="Submit" />
            </form>
        </div>

    );
}

export default Request;
