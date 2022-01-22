export const template = `
{{#> Card className='navigation' }}
    <h1>Main templates</h1>
    <ol class="navigation__list">
    {{#each links}}
        <li><a class="navigation-link" href="{{link}}">{{title}}</a></li>
    {{/each}}
    </ul>
{{/Card}}
`;
