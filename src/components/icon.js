import sprite from '../sprite.svg'

const Icons = ({name, color, className}) => {
    const $ = {
        width: 0,
        height: 0,
        fill: 'transparent',
        stroke: 'transparent'
    }
    switch (name) {
        case 'divider':
            $.width = 200
            $.height = 30
            $.fill = color
            break
        case 'beans':
            $.width = 35
            $.height = 35
            $.fill = color
            break
        case 'line':
            $.width = 240
            $.height = 1
            $.stroke = color
            break
        default:
            break
    }

    return (
        <svg {...$} className={className}>
            <use href={sprite + '#' + name} />
        </svg>
    )
}

export default Icons