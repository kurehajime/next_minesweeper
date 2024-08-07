'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function actionFunction(formData: FormData) {
    const seed = formData.get("seed");
    console.log(seed);
    revalidatePath(`/${seed}`);
    redirect(`/${seed}`);
}
