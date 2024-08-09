import { redirect } from "next/navigation";

type Props = {
    params: {
        seed: string;
        width: string;
    }
}

export default function Width({ params }: Props) {
    const seed = params.seed;
    const width = parseInt(params.width);
    const bomb = 10;
    const open = "0".repeat(width * width);
    redirect(`/${seed}/${width}/${bomb}/${open}`);
} 