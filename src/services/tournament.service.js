import http from "../http-common";

class TournamentDataservice {
    // Retrieve all tournaments
    getAll() {
        return http.get("/tournament");
    }

    // Retrieve a single tournament
    get(id) {
        return http.get(`/tournament/${id}`);
    }

    getAllByYear(yearTop, yearBot) {
        return http.get(`/tournament/past/?yearTop=${yearTop}&yearBot=${yearBot}`);
    }
}

export default new TournamentDataservice();