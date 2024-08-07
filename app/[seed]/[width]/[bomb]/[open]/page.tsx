import { Field } from "@/lib/Field";
import { actionFunction } from "../../../../lib/actions";
import FieldElement from "@/compornents/FieldElement";
import { Random } from "@/lib/Random";
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
    const cellSize = parseInt(params.width) <= 10 ? 50 : 25;
    return (
        <div>
            <form action={actionFunction}>
                <input type="hidden" name="seed" value={params.seed} />
                <input type="hidden" name="width" value={params.width} />
                <input type="hidden" name="bomb" value={params.bomb} />
                <input type="hidden" name="open" value={params.open} />
                <FieldElement
                    field={initField}
                    cellSize={cellSize}
                />
            </form>
        </div>
    );
}