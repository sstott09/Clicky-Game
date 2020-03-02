import React,{ Component } from  "react";
import ImgCard from './ImgCard';
import Nav from './Nav';
import data from '../data.json';

class Game extends Component{
    state ={
        data,
        score: 0,
        topScore: 0
    }
    handleClick = (id) => {
        let guessedCorrectly = false;
        const newImageCards = this.state.data.map((image) => {
            const newImage = {...image}
            if(newImage.id === id){
                if(!newImage.handleClick){
                    newImage.clicked= true;
                    guessedCorrectly = true;
                }
            }
            return newImageCards
        });
        guessedCorrectly ? this.correctGuess(newImageCards) : this.incorrectGuess(newImageCards)
    }
    correctGuess = (data) => {
        const newScore = this.state.score + 1;
        const newTopScore = Math.max(newScore, this.state.topScore);
        this.setState({
            score: newScore,
            topScore: newTopScore,
            data: shuffleData(data)
        })

    }
    render(){
        return(
            <div>
                    <Nav score={this.state.score} topScore = {this.state.topScore} />
                    <div>
                        {this.state.data.map(image => (
                            <ImgCard 
                                key= {image.id}
                                id= {image.id}
                                image= {image.image}
                                handleImageClick= {this.handleClick}
                            />
                        ))}
                    </div>
            </div>
            
           
        )
    }
}