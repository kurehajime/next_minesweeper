'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function actionFunction(formData: FormData) {
    const seed = formData.get("seed");
    const width = formData.get("width");
    const bomb = formData.get("bomb");
    const open = formData.get("open");
    const hit = formData.get("hit");
    if (open && hit) {
        const opened = open.toString().split("");
        opened[parseInt(hit.toString())] = "1";
        revalidatePath(`/${seed}/${width}/${bomb}/${opened.join("")}`);
        redirect(`/${seed}/${width}/${bomb}/${opened.join("")}`);
    }
}
