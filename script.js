
const myEmojis = ['😀', '😂', '😍', '😎', '😢', '👍', '🎉', '❤️', '🔥', '👏', '😴', '😜'];


const myEmojiContainer = document.getElementById('myEmojiContainer');
const myTextArea = document.getElementById('myTextArea');
const mySendButton = document.getElementById('mySendButton');
const myRemoveButton = document.getElementById('myRemoveButton');
const myMessageContainer = document.getElementById('myMessageContainer');

function myCreateEmojiButtons() {
    myEmojis.forEach(myEmoji => {
        const myButton = document.createElement('button');
        myButton.classList.add('myEmojiButton');
        myButton.textContent = myEmoji;
        myButton.addEventListener('click', () => {
            myTextArea.value += myEmoji;
        });
        myEmojiContainer.appendChild(myButton);
    });
}


function mySendMessage() {
    const myMessageText = myTextArea.value;
    if (myMessageText.trim() !== '') {
        const myMessageCard = document.createElement('div');
        myMessageCard.classList.add('myMessageCard');
        myMessageCard.textContent = myMessageText;
        myMessageContainer.appendChild(myMessageCard);
        myTextArea.value = '';
    }
}


function myRemoveMessage() {
    myTextArea.value = '';
}

myCreateEmojiButtons();


mySendButton.addEventListener('click', mySendMessage);
myRemoveButton.addEventListener('click', myRemoveMessage);
