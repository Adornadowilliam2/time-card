import { url } from "./configuration";

export const timeIn = async (body) => {
    const response = await fetch(`${url}/time-in`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return await response.json();
};
export const timeOut = async (body) => {
    const response = await fetch(`${url}/time-out`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    return await response.json();
};