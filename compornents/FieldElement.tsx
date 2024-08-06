import { Field } from "@/lib/Field"
import CellElement from "./CellElement"
import "./FieldElement.css"

type Props = {
    field: Field
    cellSize: number
    index: number
    selected: boolean
}
export default function FieldElement(props: Props) {
    const cellSize = props.cellSize
    const FieldSize = props.field.Size() * cellSize

    return (<svg width={FieldSize} height={FieldSize} >
        {props.field.Cells.map((cell, index) => {
            const x = index % props.field.Size() * cellSize
            const y = Math.floor(index / props.field.Size()) * cellSize
            return <CellElement
                key={index}
                cell={cell}
                x={x}
                y={y}
                cellSize={cellSize}
                selected={props.selected && props.index === index}
            />
        })
        }
        <rect x={0} y={0} width={FieldSize} height={FieldSize} opacity={0} ></rect>
    </svg>)
}