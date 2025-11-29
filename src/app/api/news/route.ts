// src/app/api/news/route.ts
import { NextResponse } from "next/server";

const PYTHON_API_BASE =
    process.env.PYTHON_API_BASE || "http://localhost:8000";

export async function GET() {
    try {
        const res = await fetch(`${PYTHON_API_BASE}/articles`, {
            cache: "no-store",
        });

        if (!res.ok) {
            console.error("Python API error:", res.status, res.statusText);
            return NextResponse.json(
                { error: "Failed to fetch articles" },
                { status: 500 }
            );
        }

        const data = await res.json(); // data = [ ... ]

        return NextResponse.json(data); // <-- 반드시 이렇게
    } catch (err) {
        console.error("Fetch /articles error:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

