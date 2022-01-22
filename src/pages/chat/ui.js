export const template = `
<div class="main">
    <div class="main__sidebar">
        <ul class="chat-list main__chat-list">
            {{#each chatList}}
            <li class="chat-list__item">
                {{> ChatCard this}}
            </li>
            {{/each}}
        </ul>
    </div>
    <div class="main__content">
        <div class="main__message message-bar">
            {{> TextField type='text' name='message' id='message' placeholder='Write a message...' }}
        </div>
    </div>
</div>
`;
