import Handlebars from "handlebars";

const template = `
{{#> Card className='form'}}
    <h2 class="form__title">Sign in to your account</h2>
    <form>
        {{> TextField label='Email' id='user-email' name='login' type='email'}}
        {{> TextField label='Password' id='user-password' name='password' type='password'}}

        <div class='form__controls'>
            {{#> Button
              className='button--type-secondary form__button'
              href="/sign-up"
            }}
                Sign up
            {{/Button}}

            {{#> Button
              className='button--type-primary form__button'
              href="/chat"
            }}
                Sign in
            {{/Button}}
        </div>
    </form>
{{/Card}}
`;

export const registerSignIn = () =>
  Handlebars.registerPartial("SignIn", template);
