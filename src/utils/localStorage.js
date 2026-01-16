import blogData from "../data/blogData";

export const getBlogs = () => {
    const data = localStorage.getItem("blogs");
    return data ? JSON.parse(data) : blogData;
};

export const saveBlogs = (blogs) => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
};

