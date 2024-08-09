import { redirect } from "next/navigation";

type Props = {
    params: {
        seed: string;
        width: string;
        bomb: string;
    }
}

export default function Bomb({ params }: Props) {
    const seed = params.seed;
    const width = parseInt(params.width);
    const bomb = parseInt(params.bomb);
    const open = "0".repeat(width * width);
    redirect(`/${seed}/${width}/${bomb}/${open}`);
} 