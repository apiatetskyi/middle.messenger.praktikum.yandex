export const template = `
<div class="container">
    {{#> Form title='Sign in to your account' className='form--type-vertical'}}
        {{> TextField className='form__text-field' label='Email' id='user-email' name='login' type='email'}}
        {{> TextField className='form__text-field' label='Password' id='user-password' name='password' type='password'}}

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
    {{/Form}}
</div>
`;
