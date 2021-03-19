import http from "./http-common";

const getAll = () => {
    return http.get("/todos");
};

const create = data => {
    return http.post("/todos", data);
};

const update = (id, data) => {
    return http.put(`/todos/${id}`, data);
};
const updateStatus = (id, data) => {
    return http.put(`/todos/status/${id}`, data);
};

const remove = id => {
    return http.delete(`/todos/${id}`);
};


export default {
    getAll,
    create,
    update,
    updateStatus,
    remove
};