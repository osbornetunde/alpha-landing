import styled, {keyframes} from 'styled-components';


const bouncing = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(10px);
    }
`

const ImageContainer = styled.div`
    animation: ${bouncing} 500ms ease-in-out alternate-reverse infinite;
`

export { ImageContainer }
