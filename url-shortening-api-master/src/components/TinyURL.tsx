import { useState } from "react";

export async function TinyURL(params: string) {
   
    const res = await fetch("https://api.tinyurl.com/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             "Authorization": `Bearer ${import.meta.env.VITE_TINYURL_API_KEY}`
        },
        body: JSON.stringify({
            url: params,
            domain: "tinyurl.com"
        })
    });

    if (!res.ok) {
        throw new Error("TinyURL API 호출 실패");
    }

    const data = await res.json();
    return data.data.tiny_url;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         