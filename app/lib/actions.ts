'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function actionFunction(formData: FormData) {
    const seed = formData.get("seed");
    const width = formData.get("width");
    const bomb = formData.get("bomb");
    const open = formData.get("open");
    const hit = formData.get("hit");
    const reset = formData.get("reset");
    const end = formData.get("end");
    if (reset && width) {
        const s = Math.floor(Math.random() * 0x100000000);
        const w = parseInt(width.toString());
        const opened = "0".repeat(w * w);
        revalidatePath(`/${s}/${width}/${bomb}/${opened}`);
        redirect(`/${s}/${width}/${bomb}/${opened}`);
    }
    if (end && end === "1") {
        return;
    }
    if (open && hit) {
        const opened = open.toString().split("");
        opened[parseInt(hit.toString())] = "1";
        revalidatePath(`/${seed}/${width}/${bomb}/${opened.join("")}`);
        redirect(`/${seed}/${width}/${bomb}/${opened.join("")}`);
    }
}
