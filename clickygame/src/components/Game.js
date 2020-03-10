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
    componentDidMount(){
        this.setState({
            data: this.shuffleCards(this.state.data)
        })
    }
    shuffleCards = (data) => {
        let i = data.length-1;
        while(i>0){
            const randomNum = Math.floor(Math.random()* (data.length))
            const temp = data[i];
            data[i] = data[randomNum];
            data[randomNum] = temp;
            i--;
        }
        return data;
    }
    handleClick = (id) => {
        let guessedCorrectly = false;
        const newImageCards = this.state.data.map((image) => {
            const newImage = {...image}
            if(newImage.id === id){
                if(!newImage.clicked){
                    newImage.clicked= true;
                    guessedCorrectly = true;
                }
            }
            return newImage
        });
        guessedCorrectly ? this.correctGuess(newImageCards) : this.incorrectGuess(newImageCards)
    }
    correctGuess = (data) => {
        console.log("correct guess")
        const newScore = this.state.score + 1;
        const newTopScore = Math.max(newScore, this.state.topScore);
        this.setState({
            score: newScore,
            topScore: newTopScore,
            data: this.shuffleCards(data)
        })

    }
    incorrectGuess = (data) => {
        console.log("incorrect guess")
        this.setState({
            data: this.resetData(data),
            score: 0
        })
    }
    resetData = data => {
        const resetData = data.map(item => ({
            ...item, clicked: false
        }))
        return this.shuffleCards(resetData)
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
export default Game;