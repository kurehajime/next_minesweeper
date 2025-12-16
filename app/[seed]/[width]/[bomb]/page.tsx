import { redirect } from "next/navigation";

type Props = {
    params: Promise<{
        seed: string;
        width: string;
        bomb: string;
    }>
}

export default async function Bomb(props: Props) {
    const params = await props.params;
    const seed = params.seed;
    const width = parseInt(params.width);
    const bomb = parseInt(params.bomb);
    const open = "0".repeat(width * width);
    redirect(`/${seed}/${width}/${bomb}/${open}`);
} 