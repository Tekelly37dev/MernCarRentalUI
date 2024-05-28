import http from "../http-common";

class UsersDataService {
  getAll() {
    return http.get("/user");
  }

  findByUserName(username) {
    return http.get(`/user?username=${username}`);
  }

  login(data) {
    return http.post("/user", data);
  }
}

export default new UsersDataService();