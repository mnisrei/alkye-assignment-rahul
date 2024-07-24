export const setSessionStorage = (props) => {
    const { userId, token } = props;
    sessionStorage.setItem("userId", userId ?? "");
    sessionStorage.setItem("token", token ?? "");
};

export const setNewToken = (props) => {
    const { token } = props;
    sessionStorage.setItem("token", token ?? "");
};

export const clearSessionStorage = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
};

export const getSessionStorage = () => {
    const response = { userId: "", token: "" };
    response.userId = sessionStorage.getItem("userId") ?? "";
    response.token = sessionStorage.getItem("token") ?? "";
    return response;
};

export const groupArticlesByPrompt = (articles) => {
    const groupedArticles = {};
    articles.forEach(article => {
        const { prompt } = article;
        if (!groupedArticles[prompt]) {
            groupedArticles[prompt] = { title: prompt, images: [] };
        }
        groupedArticles[prompt].images.push(article);
    });
    return Object.values(groupedArticles);
}
