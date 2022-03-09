import styled from 'styled-components'

const SButton = styled.button`
    background-color: transparent;
    border: 1px solid white;
    color: white;
    transition: all 200ms linear;
    border-radius: 5px;
    padding: 5px 15px 8px;
    font-family: inherit;
    cursor: pointer;

    &:hover {
        color: black;
        background-color: white;
    }
`

const Button = ({children, className}) => {
    return (
        <SButton className={className}>{children}</SButton>
    )
}

export default Button