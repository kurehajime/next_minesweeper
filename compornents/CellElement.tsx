import { Cell } from "@/lib/Cell"
import "./CellElement.css"

type Props = {
    cell: Cell
    index: number
    cellSize: number
}
export default function CellElement(props: Props) {
    const cellSize = props.cellSize
    const mark = (): string => {
        if (props.cell.Bomb) {
            return '💣'
        }
        if (props.cell.Count === 0) {
            return ''
        }

        return props.cell.Count.toString()
    }
    return (
        <button
            type="submit"
            name="hit"
            value={props.index.toString()}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0",
            }}
        >
            <svg viewBox={`0 0 ${cellSize} ${cellSize}`} width="100%" height="100%">
                <g>
                    <rect x={0} y={0} width={cellSize} height={cellSize} stroke='black' fill='whitesmoke' />
                    <text x={0 + cellSize / 2} y={0 + cellSize / 2}
                        textAnchor="middle" dominantBaseline="central" stroke="black">{mark()}</text>
                    <g display={props.cell.Open ? 'none' : 'block'}>
                        <rect x={0} y={0} width={cellSize} height={cellSize} stroke='black' fill='lightgray' />
                        <line x1={0 + 0} y1={0 + 0} x2={0 + cellSize} y2={0 + 0} stroke="white" strokeWidth="3" />
                        <line x1={0 + cellSize - 3} y1={0 + 0} x2={0 + cellSize - 3} y2={0 + cellSize} stroke="gray" strokeWidth="3" />
                        <line x1={0 + cellSize - 3} y1={0 + cellSize - 3} x2={0 + 0} y2={0 + cellSize - 3} stroke="gray" strokeWidth="3" />
                        <line x1={0 + 0} y1={0 + cellSize} x2={0 + 0} y2={0 + 0} stroke="white" strokeWidth="3" />
                    </g>
                </g>
            </svg>
        </button>
    )
}