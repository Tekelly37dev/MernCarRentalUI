import http from "../http-common";

class GeneralItemsDataService {
  getAll() {
    return http.get("/generalItems");
  }

  get(id) {
    return http.get(`/generalItems/${id}`);
  }

  create(data) {
    return http.post("/generalItems", data);
  }

  update(id, data) {
    return http.put(`/generalItems/${id}`, data);
  }

  delete(id) {
    return http.delete(`/generalItems/${id}`);
  }

  deleteAll() {
    return http.delete(`/generalItems`);
  }

  findByTitle(name) {
    return http.get(`/generalItems?name=${name}`);
  }
}

export default new GeneralItemsDataService();