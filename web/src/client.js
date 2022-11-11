import axios from "axios";

const getBlogPosts = () => {
    return axios.get("http://localhost:8000/posts").then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
};

export default getBlogPosts;

