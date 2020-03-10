import React from "react";
import {Container, Row, Col} from 'reactstrap';
import "./style.css"

function ImgCard(props) {
    return (
        <Container>
            <Row sm="2">
                <Col>
                    <img className="image-cards zoom" src ={props.image} alt="imageCard"
                        onClick={
                            () => props.handleImageClick(props.id)
                    }></img>
                </Col>
            </Row>
        </Container>
    );
}

export default ImgCard;
