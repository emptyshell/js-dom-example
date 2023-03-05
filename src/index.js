
function createInputNote() {
    const container = document.getElementById('container');

    const noteContainer = document.createElement('div');
    noteContainer.className = 'note-container';

    const noteTitle = document.createElement('input');
    noteTitle.className = 'note-title-input';
    noteTitle.placeholder = 'Add note title';

    const noteText = document.createElement('textarea');
    noteText.className = 'note-text-input';
    noteText.placeholder = 'Add note text...';

    const removeNoteBtn = document.createElement('button');
    removeNoteBtn.className = 'note-add-btn';
    removeNoteBtn.textContent = '+';
    removeNoteBtn.addEventListener('click', addChild);

    noteContainer.appendChild(noteTitle);
    noteContainer.appendChild(noteText);
    noteContainer.appendChild(removeNoteBtn);
    container.appendChild(noteContainer);
}

function addChild(e) {
    const titleValue = e.target.parentNode.getElementsByClassName('note-title-input').item(0);
    const textValue = e.target.parentNode.getElementsByClassName('note-text-input').item(0);
    if (titleValue.value && textValue.value) {
        container.prepend(createNote(titleValue.value, textValue.value));
        titleValue.value = '';
        textValue.value = '';
    }
}

createInputNote();