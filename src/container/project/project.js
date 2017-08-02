import React, { Component } from 'react';
import ReactZoomy from "react-zoomy";
import {ImageButton} from './/project-style';
import {Container} from '../../theme/grid';
import {Background} from './project-style';





class Project extends Component {
    render() {
        return (
            <Container> 
            <Background/>  
            <ReactZoomy
                imageUrl={require("../../asset/project1.jpg")}
                renderThumbnail={({ showImage }) => 
                <ImageButton 
                onClick={showImage}   
                >
                <img src={require('../../asset/project1_thum.jpg')}  alt="Men"/>
                </ImageButton>}
                scale={[1.1, 1.1]}
                imageProps={{
                    style: {
                    width: '100vw',
                    height: 'auto'
                    }
                }}
                />
                <h1>Oh Yeah! &#x1f609; &#128523;</h1>
            </Container>
        );
    }
}

export default Project;