import styled from '@emotion/styled'

export const Wrapper = styled.div`
    background: #f1f3f5;
    padding: 32px 8px 32px 16px;
    display: flex;
    flex-direction: column;
    width: 200px;
    //height: 100%;
    overflow: auto;

    @media screen and (max-width: 500px) {
        position: absolute;
        z-index: 2;
        background: #313131;
        left: ${(props) => (props.openSideBar ? 0 : '-216px')};
        transition: all 0.2s ease-in-out;
        height: 100%;
    }
`

export const Main = styled.div`
    flex-grow: 2;
`

export const logo = {
    background: 'white',
    padding: '12px',
    borderRadius: '8px',
}

export const section = {
    fontSize: '16px',
    lineHeight: '24px',
    margin: 0,
    color: '#637381',
    '@media screen and (max-width: 500px)': {
        color: '#fff',
    },
}
