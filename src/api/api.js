import Request from './Request';

/**
 * Class that exposes REST API endpoints
 */
class Api {
  constructor() {
    this.request = new Request();
  }

  getStatus() {
    return  this.request.get('/getStatus')
  }
  changeStatus() {
    return this.request.get('/changeStatus')
  }
  getSchedule() {
    return this.request.get('/schedule')
  }
  addSchedule(schedule) {
    return this.request.post('/schedule', undefined, schedule)
  }
  updateSchedule(data) {
    const params = {
      "uid": data["uid"]
    }
    const body = data["payload"]

    return this.request.put('/schedule', params, body)
  }
  deleteSchedule({ uid }) {
    const params = {
      "uid": uid
    }
    return this.request.delete('/schedule', params, undefined)
  }
}

export default api = new Api();