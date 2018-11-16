import HPService from "./hp-service.js";


let _hpService = new HPService

function _drawStudents() {
  let students = _hpService.students
  let template = ''
  students.forEach(student => {
    template += `
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <div class="card-title">${student.name}</div>
          <div class="card-text">${student.house}</div>
          <button onclick="app.controllers.hpController.awardPoints('${student.house}')">Award House Points</button>
        </div>
      </div>
    </div>
    `
  })
  document.getElementById('students').innerHTML = template
}

export default class HPController {
  constructor() {
    _hpService.getCharacters(_drawStudents)
  }
  awardPoints(house) {
    let lowerHouse = house.toLowerCase()
    //only way to update string with math that I could quickly think of...
    document.getElementById(`${lowerHouse}`).innerText = (parseFloat(document.getElementById(`${lowerHouse}`).innerText) + 5).toString()
  }
  decrement(e) {
    if (document.getElementById(`${e.target.id}`).innerText <= '0') return
    document.getElementById(`${e.target.id}`).innerText = (parseFloat(document.getElementById(`${e.target.id}`).innerText) - 1).toString()
  }
}