import Handlebars from "handlebars";

import "./index.css";

const template = `
<div class="text-field">
    {{#if label}}
    <label
        class="text-field__label"
        for="{{id}}"
    >
        {{label}}
    </label>
    {{/if}}

    <input
        class="text-field__input"
        id="{{id}}"
        name="{{name}}"
        type="{{type}}"
        {{#if value }}value="{{value}}"{{/if}}
        {{#if placeholder }}placeholder="{{placeholder}}"{{/if}}
    />
</div>
`;

export const registerTextField = () =>
  Handlebars.registerPartial("TextField", template);
