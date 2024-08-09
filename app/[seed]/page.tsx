import { redirect } from "next/navigation";
type Props = {
    params: {
        seed: string;
    }
}
export default function Seed({ params }: Props) {
    const seed = params.seed;
    const width = 10;
    const bomb = 10;
    const open = "0".repeat(width * width);
    redirect(`/${seed}/${width}/${bomb}/${open}`);
} 