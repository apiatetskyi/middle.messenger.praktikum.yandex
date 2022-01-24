import Handlebars from "handlebars";

import "./index.css";

const template = `
<a class="button {{className}}" {{#if href}}href="{{href}}"{{/if}} >
    {{> @partial-block}}
</a>
`;

export const registerButton = () =>
  Handlebars.registerPartial("Button", template);
