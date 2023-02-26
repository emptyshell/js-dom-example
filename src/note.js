function createNote(title, text) {
    const noteContainer = document.createElement('div');
    noteContainer.className = 'note-container';
    
    const noteTitle = document.createElement('h3');
    noteTitle.textContent = `${title} - note`;
    noteTitle.className = 'note-title';

    const noteText = document.createElement('p');
    noteText.className = 'note-text';
    noteText.textContent = text;

    const removeNoteBtn = document.createElement('button');
    removeNoteBtn.className = 'note-remove-btn';
    removeNoteBtn.textContent = 'X';
    removeNoteBtn.addEventListener('click', removeNote);

    noteContainer.appendChild(noteTitle);
    noteContainer.appendChild(noteText);
    noteContainer.appendChild(removeNoteBtn);

    return noteContainer;
}

function removeNote(e) {
    if(e.target.parentElement) {
        e.target.parentElement.remove();
    }
}
