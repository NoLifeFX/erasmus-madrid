import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const COOKIE_NAME = "admin_token";
const ADMIN_EMAIL = "admin@erasmus-madrid.fr";

function getSecret(): Uint8Array {
  const secret =
    process.env.SECRET_COOKIE_PASSWORD ??
    "dev-secret-cookie-password-32-chars!";
  return new TextEncoder().encode(secret);
}

export async function createToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(getSecret());
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export async function getSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}

export function checkCredentials(email: string, password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin";
  return email === ADMIN_EMAIL && password === adminPassword;
}
