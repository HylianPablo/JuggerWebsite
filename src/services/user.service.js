import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/user");
  }

  get(id) {
    return http.get(`/login/${id}`);
  }

  create(data) {
    return http.post("/user", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByName(name) {
    return http.get(`/user?name=${name}`);
  }
}

export default new TutorialDataService();