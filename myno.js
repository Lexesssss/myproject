document.getElementById("quicky-btn").addEventListener("click", function () {
    window.location.href = "newhome.html";
});

document.getElementById("addNoteCard").addEventListener("click", function () {
    document.getElementById("noteModal").style.display = "flex";
});

document.getElementById("addNoteIcon").addEventListener("click", function () {
    document.getElementById("noteModal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("noteModal").style.display = "none";
});

document.getElementById("saveNote").addEventListener("click", function () {

    let title = document.getElementById("noteTitle").value;
    let desc = document.getElementById("noteDesc").value;

    if (title.trim() === "" || desc.trim() === "") {
        alert("Please fill in both ddfields!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes"));
    if (!notes) {
        notes = [];
    }

    notes.push({ title: title, description: desc });
    localStorage.setItem('notes', JSON.stringify(notes));

    if (notes.length) {
        const addNoteCard = document.getElementById('addNoteCard');
        addNoteCard.style.display = 'none';

        const addNoteIcon = document.getElementById('addNoteIcon');
        addNoteIcon.style.display = 'inherit';
    }

    let notesContainer = document.getElementById("notes");

    let note = document.createElement("div");
    note.classList.add("note");

    let noteTitle = document.createElement("h4");
    noteTitle.innerText = title;
    note.appendChild(noteTitle);

    let noteDesc = document.createElement("p");
    noteDesc.innerText = desc;
    note.appendChild(noteDesc);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        let notes = JSON.parse(localStorage.getItem("notes"));
        if (!notes) {
            notes = [];
        }

        let newNotes = notes.filter((item) => item.title !== title && item.description !== desc);
        notesContainer.removeChild(note);
        localStorage.setItem('notes', JSON.stringify(newNotes));

        if (!newNotes.length) {
            const addNoteCard = document.getElementById('addNoteCard');
            addNoteCard.style.display = 'inherit';

            const addNoteIcon = document.getElementById('addNoteIcon');
            addNoteIcon.style.display = 'none';
        }
    });

    note.appendChild(deleteBtn);
    notesContainer.appendChild(note);

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteDesc").value = "";
    document.getElementById("noteModal").style.display = "none";
});

window.addEventListener('load', function () {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (!notes) {
        notes = [];
    }

    if (notes.length) {
        const addNoteCard = document.getElementById('addNoteCard');
        addNoteCard.style.display = 'none';

        const addNoteIcon = document.getElementById('addNoteIcon');
        addNoteIcon.style.display = 'inherit';
    }

    notes.forEach((item) => {
        let notesContainer = document.getElementById("notes");

        let note = document.createElement("div");
        note.classList.add("note");

        let noteTitle = document.createElement("h4");
        noteTitle.innerText = item.title;
        note.appendChild(noteTitle);

        let noteDesc = document.createElement("p");
        noteDesc.innerText = item.description;
        note.appendChild(noteDesc);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            let notes = JSON.parse(localStorage.getItem("notes"));
            if (!notes) {
                notes = [];
            }

            let newNotes = notes.filter((i) => item.title !== i.title && item.description !== i.description);
            notesContainer.removeChild(note);
            localStorage.setItem('notes', JSON.stringify(newNotes));

            if (!newNotes.length) {
                const addNoteCard = document.getElementById('addNoteCard');
                addNoteCard.style.display = 'inherit';

                const addNoteIcon = document.getElementById('addNoteIcon');
                addNoteIcon.style.display = 'none';
            }
        });

        note.appendChild(deleteBtn);
        notesContainer.appendChild(note);
    });
});