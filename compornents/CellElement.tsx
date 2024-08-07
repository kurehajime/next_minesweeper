import { Cell } from "@/lib/Cell"
import "./CellElement.css"

type Props = {
    cell: Cell
    index: number
}
export default function CellElement(props: Props) {
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
        >{mark()} </button>
    )
}