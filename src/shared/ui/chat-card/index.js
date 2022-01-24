import avatar from "./avatar.svg";
import Handlebars from "handlebars";

import "./index.css";

const template = `
<div class="chat-card">
    <img class="chat-card__avatar" src="${avatar}" width="48" height="48" alt="Avatar"  />
    <div class="chat-card__content">
        <p class="chat-card__title">{{chatName}}</p>
        <p class="chat-card__message">{{message}}</p>
        <span class="chat-card__time">{{time}}</span>
        {{#if count}}<span class="chat-card__indicator">{{count}}</span>{{/if}}
    </div>
</div>
`;

export const registerChatCard = () =>
  Handlebars.registerPartial("ChatCard", template);
