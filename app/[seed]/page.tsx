import { redirect } from "next/navigation";
type Props = {
    params: Promise<{
        seed: string;
    }>
}
export default async function Seed(props: Props) {
    const params = await props.params;
    const seed = params.seed;
    const width = 10;
    const bomb = 10;
    const open = "0".repeat(width * width);
    redirect(`/${seed}/${width}/${bomb}/${open}`);
} 