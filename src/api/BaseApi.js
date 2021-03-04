import Vue from 'vue'

export default class {
  execGET (url) {
    return new Promise((resolve, reject) => {
      Vue.http.get(url).then((res) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
