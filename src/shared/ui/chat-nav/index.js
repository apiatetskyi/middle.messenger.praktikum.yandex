import Handlebars from "handlebars";
import profileIcon from "./profile.svg";
import chatIcon from "./chat.svg";
import searchIcon from "./search.svg";

import "./index.css";

const template = `
<nav class="chat-nav {{className}}">
    <a class="chat-nav__link" href="#"><img src="${chatIcon}" alt="Chat" /></a>
    <a class="chat-nav__link" href="#"><img src="${searchIcon}" alt="Search" /></a>
    <a class="chat-nav__link" href="/profile"><img src="${profileIcon}" alt="Profile" /></a>
</nav>
`;

export const registerChatNav = () =>
  Handlebars.registerPartial("ChatNav", template);
