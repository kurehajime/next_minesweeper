import { redirect } from "next/navigation";

type Props = {
    params: Promise<{
        seed: string;
        width: string;
    }>
}

export default async function Width(props: Props) {
    const params = await props.params;
    const seed = params.seed;
    const width = parseInt(params.width);
    const bomb = 10;
    const open = "0".repeat(width * width);
    redirect(`/${seed}/${width}/${bomb}/${open}`);
} 