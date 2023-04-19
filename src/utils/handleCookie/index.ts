export const getCookieValue = (cookieName: string) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";").map((cookie) => cookie.trim());
    const matchedCookie = cookies.find((cookie) => cookie.startsWith(`${cookieName}=`));
    if (matchedCookie) {
        return matchedCookie.split("=")[1];
    } else {
        return null;
    }
};


export const setCookie = (value: string, expires: string, path: string) => {
    document.cookie = `apiKey=${encodeURIComponent(
        value,
    )}; expires=${expires}; path=${path}`;
};
const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 1);
export const expires = expirationDate.toUTCString();