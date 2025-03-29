document.getElementById("quicky-btn").addEventListener("click", function () {
    window.location.href = "newhome.html"; 
});

document.getElementById("addNoteCard").addEventListener("click", function() {
    document.getElementById("noteModal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("noteModal").style.display = "none";
});

document.getElementById("saveNote").addEventListener("click", function() {
    let title = document.getElementById("noteTitle").value;
    let desc = document.getElementById("noteDesc").value;
    
    if (title.trim() === "" || desc.trim() === "") {
        alert("Please fill in both fields!");
        return;
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

    deleteBtn.addEventListener("click", function() {
        notesContainer.removeChild(note);
    });

    note.appendChild(deleteBtn);
    notesContainer.appendChild(note);

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteDesc").value = "";
    document.getElementById("noteModal").style.display = "none";
});
