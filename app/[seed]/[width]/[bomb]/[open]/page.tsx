import { Field } from "@/lib/Field";
import { actionFunction } from "../../../../lib/actions";
import FieldElement from "@/compornents/FieldElement";
type Props = {
    params: {
        seed: string;
        width: string;
        bomb: string;
        open: string;
    }
}

export default function Game({ params }: Props) {
    const initField = Field.GetRandomField(parseInt(params.width), parseInt(params.bomb));
    const cellSize = parseInt(params.width) <= 10 ? 50 : 25;
    return (
        <div>
            <h1>Seed</h1>
            {params.seed}
            {params.width}
            {params.bomb}
            {params.open}
            <form action={actionFunction}>
                <input type="string" name="seed" />
                <button type="submit">Submit</button>
            </form>
            <FieldElement
                field={initField}
                cellSize={cellSize}
            />
        </div>
    );
}