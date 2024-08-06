import { useState } from "react"
import FieldElement from "./FieldElement"
import './GameElement.css'
import { Field } from "@/lib/Field"

export default function GameElement() {
    const [field, setField] = useState<Field>(Field.GetRandomField(10, 10))
    const [showAssistant, setShowAssistant] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [level, setLevel] = useState<number>(1)
    const [selectIndex, setSelectIndex] = useState<number>(0)


    const cellSize = level === 1 ? 50 : 25;
    const newGame = (level: number) => {
        switch (level) {
            case 1:
                setField(Field.GetRandomField(10, 10))
                break;
            case 2:
                setField(Field.GetRandomField(20, 50))
                break;
            case 3:
                setField(Field.GetRandomField(20, 80))
                break;
            case 99:
                setField(Field.GetRandomField(20, 399))
                break;
        }
    }


    return (<>
        <div className="main">
            <FieldElement
                field={field}
                cellSize={cellSize}
                index={selectIndex}
                selected={showMenu}
            />
        </div>
    </>)
}