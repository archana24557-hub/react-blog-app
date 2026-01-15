const STORAGE_KEY = "blogs";

// Get blogs from localStorage
export const getBlogs = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

// Save blogs to localStorage
export const saveBlogs = (blogs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
};
if (!localStorage.getItem("blogs")) {
    localStorage.setItem("blogs", JSON.stringify(blogData));
}
