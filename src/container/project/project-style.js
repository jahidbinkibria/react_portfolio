import styled from 'styled-components';
import {yellow} from '../../theme/color';



export const ImageButton = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    & > img{
        transition: transform .3s;
    }

    &:hover{
        & > img{
            transform: scale(1.3);
        }
    }
`;


export const Background = styled.div`
    position:fixed;
    width: 80vw;
    top :13vh;
    height: 80vh;
    background-image: url(${require('../../asset/Untitled-2.png')});
    background-color: ${yellow};
    opacity: .4;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99;
    left: 17vh;
`;



