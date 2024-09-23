// api/route.ts
import { serialize } from "cookie";

export async function POST(request: Request, params: { slug: string }) {
    const data: { password: string } = await request.json();
    const password = data.password;
    console.log(password);
    console.log(process.env.PAGE_PASSWORD);

    if (process.env.PAGE_PASSWORD !== password) {
        return new Response("incorrect password", {
            status: 401,
        });
    }

    return new Response("password correct", {
        status: 200,
    });
}