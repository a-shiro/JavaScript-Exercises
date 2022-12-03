import {html} from '../lib.js';
import {submitHandler} from "../util.js";
import {register} from "../api/user.js";

const registerTemplate = (onRegister) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onRegister} class="login-form">
        <input type="text" name="email" id="register-email" placeholder="email"/>
        <input type="password" name="password" id="register-password" placeholder="password"/>
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>`

export async function showRegister(ctx) {
    ctx.render(registerTemplate(submitHandler(onRegister)))

    async function onRegister(data) {
        const email = data['email'];
        const password = data['password'];
        const repeatPassword = data['re-password'];

        if (email == '' || password == '' || repeatPassword == '') {
            return alert('All fields are required!');
        }
        if (password !== repeatPassword) {
            return alert('Passwords don\'t match!');
        }

        await register(email, password);

        ctx.updateNav();
        ctx.page.redirect('/catalog');
    }
}