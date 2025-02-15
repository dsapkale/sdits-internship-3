var students = ["Ram", "Raj", "Aman", "Ajay", "Baharat", "Chetan", "Kabir"]
var listElement = document.getElementById("list")
setModifiedDataInList(students)

function filterStudent() {
    var inputValue = document.getElementById("student")
                                    .value.toLowerCase()
    var modified = students.filter(
        (studentName) =>
            studentName.toLowerCase().startsWith(inputValue)
    )
    setModifiedDataInList(modified)
}

function setModifiedDataInList(modifiedArray) {
    listElement.innerHTML = modifiedArray.map((v) => "<li>" + v + "</li>")
}