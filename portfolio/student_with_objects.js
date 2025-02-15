var students = [
    { name: "Ram", surname: "Yadav", age: 24, city: "Devas" },
    { name: "Raj", surname: "Shukla", age: 25, city: "Indore" },
    { name: "Krishna", surname: "Yadav", age: 30, city: "nepa" },
    { name: "Lakhan", surname: "Yadav", age: 32, city: "Delhi" }
]
var listElement = document.getElementById("list")
var check = 1
setModifiedDataInList(students)
function changeFilterType(checkValue) {
    check = checkValue
}
function filterStudent() {
    var inputValue = document.getElementById("student")
        .value.toLowerCase()

    var modified = students.filter(
        (student) => {
            if (check == 1) {
                return student.name.toLowerCase().startsWith(inputValue)
            }
            if (check == 2) {
                return student.surname.toLowerCase().startsWith(inputValue)
            }
            if (check == 3) {
                return student.age == inputValue
            }
            if (check == 4) {
                return student.city.toLowerCase().startsWith(inputValue)
            }
            return true
        }
    )
    setModifiedDataInList(modified)
}

function setModifiedDataInList(modifiedArray) {
    listElement.innerHTML = modifiedArray.map((v) =>
        `<li>
    <h2>name:${v.name} surname:${v.surname} 
    </h2>
    <h3>age:${v.age} </h3>
    <h4>city:${v.city}</h4>
</li>`)
}