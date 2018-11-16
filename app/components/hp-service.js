let _api = axios.create({
  baseURL: 'https://www.potterapi.com/v1/characters?key=$2a$10$ACiYG3Qon3uDwfXZxaA0COJwmhiFMXuiMerk.UrYDHY/9HEjhEkOW&role=student'
})

let _students = []

export default class HPService {
  constructor() { }
  get students() {
    return _students
  }

  getCharacters(drawCallback) {
    _api.get('')
      .then(res => {
        console.log(res)
        _students = res.data
        drawCallback()
      })
  }
}