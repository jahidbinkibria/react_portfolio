import React ,{Component} from "react";
import {Container} from '../../theme/grid';
import {HeroImage,RevealP} from './Home.style';
import Wheninview from "../../component/wheninview/wheninview";



export default  class Home extends Component{
    render(){
        return(
            <Container>
                <HeroImage>
                    <h1>Khan Saheb</h1>
                    <h2>Front-end Developer</h2>
                </HeroImage>
               <Wheninview>
                   {({isInView}) => 
                    <RevealP hide={!isInView}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione rem nobis dolorum eius autem alias optio veniam totam voluptatibus a, ipsa blanditiis quisquam dolores molestias, similique laboriosam iste suscipit magnam maxime quia ut. Unde quam eaque magni doloribus cum harum adipisci minus ipsam, maxime. Facere itaque, similique esse repudiandae cum corrupti ullam ipsam! Dolor necessitatibus earum atque aut, hic molestias tempora!
                    </RevealP>
                   } 
               </Wheninview>
            </Container>
        )
    }
}
