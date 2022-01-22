import Handlebars from "handlebars";

const template = `
{{#> Card className='form'}}
    <h2 class="form__title">Create your account</h2>
    <form>
        {{> TextField label='Email' id='email' name='email' type='email'}}
        {{> TextField label='Login' id='login' name='login' type='text'}}
        {{> TextField label='First name' id='first_name' name='first_name' type='text'}}
        {{> TextField label='Second name' id='second_name' name='second_name' type='text'}}
        {{> TextField label='Phone' id='phone' name='phone' type='tel'}}
        {{> TextField label='Password' id='password' name='password' type='password'}}
        {{> TextField label='Confirm password' id='confirm_password' name='confirm_password' type='password'}}

        <div class='form__controls'>
            {{#> Button
              className='button--type-secondary form__button'
              href="/sign-in"
            }}
                Sign in
            {{/Button}}

            {{#> Button
              className='button--type-primary form__button'
              href="/sign-up"
            }}
                Sign Up
            {{/Button}}
        </div>
    </form>
{{/Card}}
`;

export const registerSignUp = () =>
  Handlebars.registerPartial("SignUp", template);
