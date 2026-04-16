import type { JwtPayload, UserRole } from "../types/auth";

const encoder = new TextEncoder();

const ACCESS_SECRET = "dessert-access-secret";
const REFRESH_SECRET = "dessert-refresh-secret";

const base64UrlEncode = (value: string) =>
  btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");

const base64UrlDecode = (value: string) => {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - (normalized.length % 4)) % 4);
  return atob(`${normalized}${padding}`);
};

const sign = async (message: string, secret: string) => {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  const bytes = Array.from(new Uint8Array(signature), (byte) =>
    String.fromCharCode(byte),
  ).join("");

  return base64UrlEncode(bytes);
};

const verifySignature = async (
  message: string,
  signature: string,
  secret: string,
) => {
  const expected = await sign(message, secret);
  return expected === signature;
};

const createToken = async (
  userId: string,
  role: UserRole,
  type: "access" | "refresh",
  expiresInSec: number,
  secret: string,
) => {
  const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const now = Math.floor(Date.now() / 1000);
  const payload: JwtPayload = {
    sub: userId,
    role,
    type,
    iat: now,
    exp: now + expiresInSec,
  };

  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const body = `${header}.${encodedPayload}`;
  const signature = await sign(body, secret);

  return `${body}.${signature}`;
};

const parseToken = async (token: string, secret: string) => {
  const [header, payload, signature] = token.split(".");
  if (!header || !payload || !signature) {
    return null;
  }

  const isValid = await verifySignature(`${header}.${payload}`, signature, secret);
  if (!isValid) {
    return null;
  }

  const parsedPayload = JSON.parse(base64UrlDecode(payload)) as JwtPayload;
  if (parsedPayload.exp <= Math.floor(Date.now() / 1000)) {
    return null;
  }

  return parsedPayload;
};

export const issueAccessToken = (userId: string, role: UserRole) =>
  createToken(userId, role, "access", 60 * 3, ACCESS_SECRET);

export const issueRefreshToken = (userId: string, role: UserRole) =>
  createToken(userId, role, "refresh", 60 * 60 * 24, REFRESH_SECRET);

export const verifyRefreshToken = (token: string) => parseToken(token, REFRESH_SECRET);

export const verifyAccessToken = (token: string) => parseToken(token, ACCESS_SECRET);
