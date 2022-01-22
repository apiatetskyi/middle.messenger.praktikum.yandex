import Handlebars from "handlebars";

import "./index.css";

const template = `
<div class="card {{className}}">
    {{> @partial-block}}
</div>
`;

export const registerCard = () => Handlebars.registerPartial("Card", template);
