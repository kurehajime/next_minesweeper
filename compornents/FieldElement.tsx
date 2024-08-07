import { Field } from "@/lib/Field"
import CellElement from "./CellElement"
import "./FieldElement.css"

type Props = {
    field: Field
    cellSize: number
}
export default function FieldElement(props: Props) {
    const cellSize = props.cellSize
    const FieldSize = props.field.Size() * cellSize

    return (
        <div
            style={{
                width: FieldSize,
                height: FieldSize,
                display: "grid",
                gridTemplateColumns: `repeat(${props.field.Size()}, 1fr)`,
                gridTemplateRows: `repeat(${props.field.Size()}, 1fr)`,
            }}
        >
            {
                props.field.Cells.map((cell, index) => (
                    <button
                        type="submit"
                        key={index}
                        name="hit"
                        value={index.toString()}
                    >{cell.Count} </button>
                ))
            }
        </div>)
}