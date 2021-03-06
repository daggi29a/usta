import axios from "axios";

const service = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "/api"
            : "http://localhost:3030/api"
});

const errHandler = err => {
    console.error(err);
    throw err;
};

export default {
    service: service,

    getCountries() {
        return service
            .get("/countries")
            .then(res => res.data)
            .catch(errHandler);
    },

    postUserInvite(data) {
        return service
            .post("/userinvite", data)
            .then(res => res.data)
            .catch(errHandler);
    },

    getUserInvites() {
        return service
            .get("/userinvite")
            .then(res => res.data)
            .catch(errHandler);
    },

    checkUserInvite(token) {
        let path = "/userinvite/" + token.token;
        return service
            .get(path)
            .then(res => res.data)
            .catch(errHandler);
    },

    deleteUserInvite(email) {
        return service
            .delete("/userinvite/", { data: { email } })
            .then(res => res.data)
            .catch(errHandler);
    },

    getVeranstaltung() {
        return service
            .get("/veranstaltung")
            .then(res => res.data)
            .catch(errHandler);
    },

    getVeranstaltungById(Id) {
        let path = "/veranstaltung/" + Id.Id;
        console.log(path);
        return service
            .get(path)
            .then(res => res.data)
            .catch(errHandler);
    },

    postVeranstaltung(data) {
        return service
            .post("/veranstaltung", data)
            .then(res => res.data)
            .catch(errHandler);
    },

    updateSchichtplan(data) {
        /* todo upsert shichtplan */
        let res = { message: "todo schichtplan speichern" };
        return res;
    },

    getSecret() {
        return service
            .get("/secret")
            .then(res => res.data)
            .catch(errHandler);
    },

    signup(userInfo) {
        return service
            .post("/signup", userInfo)
            .then(res => res.data)
            .catch(errHandler);
    },

    login(email, password) {
        return service
            .post("/login", {
                email,
                password
            })
            .then(res => {
                const { data } = res;
                localStorage.setItem("user", JSON.stringify(data));
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + data.token;
                return data;
            })
            .catch(errHandler);
    },

    logout() {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("user");
    },

    loadUser() {
        const userData = localStorage.getItem("user");
        if (!userData) return false;
        const user = JSON.parse(userData);
        if (user.token) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + user.token;
            return user;
        }
        return false;
    },

    isLoggedIn() {
        return localStorage.getItem("user") != null;
    },

    getUserShortName() {
        if (this.isLoggedIn()) {
            const user = this.loadUser();
            return user.firstname + " " + user.lastname.substr(0, 1) + ".";
        } else {
            return null;
        }
    },

    addPicture(file) {
        const formData = new FormData();
        formData.append("picture", file);
        return service
            .post("/users/first-user/pictures", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => res.data)
            .catch(errHandler);
    },

    /* Helper functions */
    getFormattedDate(date, type = "date") {
        let fDate = new Date(Date.parse(date));
        let output;
        switch (type) {
            case "date":
                output = fDate.toLocaleDateString();
                break;
            case "time":
            default:
                output = fDate.toLocaleTimeString();
                break;
        }
        return output;
    }
};
