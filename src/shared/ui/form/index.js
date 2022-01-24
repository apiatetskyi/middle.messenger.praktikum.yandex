import Handlebars from "handlebars";

import "./index.css";

const template = `
<div class="form {{ className }}">
    {{#> Card }}
        <h2 class="form__title">{{title}}</h2>
        <form>
            {{> @partial-block}}
        </form>
    {{/Card}}
</div>
`;

export const registerForm = () => Handlebars.registerPartial("Form", template);
