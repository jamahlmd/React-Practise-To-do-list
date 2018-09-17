import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState( () => ({ options: [] }));
    };
    deleteSelectedOption = () => {
      this.setState(() => ({selectedOption: undefined}));
    };
    handleAddOption = (option) => {
        if(!option){
            return 'enter valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else  {
            this.setState((prev)=>({options: prev.options.concat(option) }));
        }
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prev)=>({
            options: prev.options.filter((option)=> optionToRemove !== option)
        }));
    };
    handlePick = () =>{

        if(this.state.options.length > 0) {
            const number = Math.floor(Math.random() * this.state.options.length);
            const optionPick = this.state.options[number];

            this.setState(() => ({selectedOption: optionPick}));
        }

    };
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            }
        }
        catch (e){

        }

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);

            localStorage.setItem('options',json);

        }
    }

    render(){
        const title = "IndecisionApp";
        const subTitle = "SubTitle";
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        optionPick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            handleDeleteOption={this.handleDeleteOption}
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        deleteSelectedOption={this.deleteSelectedOption}
                    />
                </div>
            </div>
        );
    }
}


export default IndecisionApp;