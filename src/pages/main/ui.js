export const template = `
<div class="main">
    <h1>Index page</h1>

    <ul>
    {{#each links}}
        <li><a href="{{this.link}}">{{this.title}}</a></li>
    {{/each}}
    </ul>
</div>
`;
