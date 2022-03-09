import styled from 'styled-components'

import Icon from './icon'

const SWrapper = styled.div``

const SInner = styled.nav`
    display: flex;
`

const SUl = styled.ul`
    display: flex;
    list-style: none;
    gap: 40px;
    font-size: 12px;
    align-items: flex-end;
`

const SLi = styled.li``

const SA = styled.a`
    color: ${props => props.color};
    transition: all 200ms linear;
    &:hover {
        color: grey;
    }
    text-decoration: none;
`

const Nav = ({navItems, color, className}) => {
    const items = navItems.map(({title, src, key}) => {
        return (
            <SLi key={key}>
                <SA color={color} href={src}>{title}</SA>
            </SLi>
        )
    })

    return (
        <SWrapper className={className}>
            <SInner>
                <Icon name="beans" color={color} />
                <SUl>
                    {items}
                </SUl>
            </SInner>
        </SWrapper>
    )
}

export default Nav;