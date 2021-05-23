import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/user");
  }

  get(name) {
    return http.get(`/user/${name}`);
  }

  create(data) {
    return http.post("/user", data);
  }

  update(name, data) {
    return http.put(`/user/${name}`, data);
  }

  delete(name) {
    return http.delete(`/user/${name}`);
  }

  deleteAll() {
    return http.delete(`/user`);
  }

  findByName(name) {
    return http.get(`/user?name=${name}`);
  }
}

export default new TutorialDataService();