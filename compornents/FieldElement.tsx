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
            className="field"
        >
            {
                props.field.Cells.map((cell, index) => (
                    <CellElement
                        cell={cell}
                        index={index}
                        cellSize={cellSize}
                    />
                ))
            }
        </div>)
}