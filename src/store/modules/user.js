import axios from 'axios'
import VueNotifications from 'vue-notifications'

const state = {
  user: null
}
const mutation = {

}
const actions = {
  auth ({ commit }, { email, password, repassword }) {
    if (password === repassword || !repassword) {
      axios.post('/api/auth', { email, password }).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    } else {
      VueNotifications.error({ message: 'НЕ верные данные' })
    }
  }
}
const getters = {

}

export default {
  state,
  mutation,
  actions,
  getters
}
