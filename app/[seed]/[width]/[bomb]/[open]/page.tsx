import { Field } from "@/lib/Field";
import { actionFunction } from "../../../../lib/actions";
import FieldElement from "@/compornents/FieldElement";
import { Random } from "@/lib/Random";
import BarElement from "@/compornents/BarElement";
import { redirect } from "next/navigation";
type Props = {
    params: {
        seed: string;
        width: string;
        bomb: string;
        open: string;
    }
}

export default function Game({ params }: Props) {
    const initField = Field.GetRandomField(parseInt(params.width), parseInt(params.bomb), new Random(parseInt(params.seed)));
    const openedField = initField.OpenArray(params.open.split("").map(Number));
    const cellSize = parseInt(params.width) <= 10 ? 50 : 25;
    const end = (openedField.IsGameOver() || openedField.IsComplete()) ? "1" : "0";
    const open1 = params.open;
    const open2 = "0".repeat(parseInt(params.width) * parseInt(params.width));
    if (open1.length !== open2.length) {
        redirect(`/${params.seed}/${params.width}/${params.bomb}/${open2}`);
    }

    return (
        <div className="container">
            <form action={actionFunction}>
                <input type="hidden" name="seed" value={params.seed} />
                <input type="hidden" name="width" value={params.width} />
                <input type="hidden" name="bomb" value={params.bomb} />
                <input type="hidden" name="open" value={params.open} />
                <input type="hidden" name="end" value={end} />
                <BarElement
                    field={openedField}
                    cellSize={cellSize}
                />
                <FieldElement
                    field={openedField}
                    cellSize={cellSize}
                />
            </form>
        </div>
    );
}