export const template = `
{{#> Card className='form form--type-profile'}}
    <div class="avatar">
        <div class="avatar__image"></div>
        <p class="avatar__nickname">Johny</p>
    </div>
    <form class="form__form">
        {{> TextField className='form__text-field' label='Email' id='email' name='email' type='email' value='test@gmail.com'}}
        {{> TextField className='form__text-field' label='Login' id='login' name='login' type='text' value='freddy'}}
        {{> TextField className='form__text-field' label='First name' id='first_name' name='first_name' type='text' value='Fred'}}
        {{> TextField className='form__text-field' label='Second name' id='second_name' name='second_name' type='text' value='Johnson'}}
        {{> TextField className='form__text-field' label='Phone' id='phone' name='phone' type='tel' value='+7777777777'}}
        {{> TextField className='form__text-field' label='Nickname' id='nickname' name='display_name' type='text' value='johny'}}

        <div class='form__controls'>
            {{#> Button
              className='button--type-secondary form__button'
              href="/sign-in"
            }}
                Log out
            {{/Button}}

            {{#> Button
              className='button--type-secondary form__button'
              href="/sign-up"
            }}
                Change password
            {{/Button}}
        </div>
    </form>
{{/Card}}
`;
