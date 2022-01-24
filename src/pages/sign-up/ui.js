export const template = `
<div class="container">
    {{#> Form title='Create your account' className='form--type-vertical'}}
        {{> TextField className='form__text-field' label='Email' id='email' name='email' type='email'}}
        {{> TextField className='form__text-field' label='Login' id='login' name='login' type='text'}}
        {{> TextField className='form__text-field' label='First name' id='first_name' name='first_name' type='text'}}
        {{> TextField className='form__text-field' label='Second name' id='second_name' name='second_name' type='text'}}
        {{> TextField className='form__text-field' label='Phone' id='phone' name='phone' type='tel'}}
        {{> TextField className='form__text-field' label='Password' id='password' name='password' type='password'}}
        {{> TextField className='form__text-field' label='Confirm password' id='confirm_password' name='confirm_password' type='password'}}

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
    {{/Form}}
</div>
`;
