import blogData from "../data/blogData";

export const getBlogs = () => {
    const data = localStorage.getItem("blogs");
    return data ? JSON.parse(data) : blogData;
};

export const saveBlogs = (blogs) => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
};

export const updateBlog = (id, updates) => {
    const blogs = getBlogs();
    const index = blogs.findIndex((b) => b.id === Number(id));
    if (index !== -1) {
        blogs[index] = { ...blogs[index], ...updates };
        saveBlogs(blogs);
        return blogs[index];
    }
    return null;
};

