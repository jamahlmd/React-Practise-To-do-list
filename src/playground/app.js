
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

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

    handleDeleteOptions(){
        this.setState( () => ({ options: [] }));
    }

    handleAddOption(option){
        if(!option){
            return 'enter valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else  {
            this.setState((prev)=>({options: prev.options.concat(option) }));
        }
    }
    handleDeleteOption(optionToRemove){
        this.setState((prev)=>({
            options: prev.options.filter((option)=> optionToRemove !== option)
        }));
    }
    handlePick(){

        if(this.state.options.length > 0) {
            const number = Math.floor(Math.random() * this.state.options.length);
            const optionPick = this.state.options[number];

            alert(optionPick);
        }

    }
    render(){
        const title = "IndecisionApp";
        const subTitle = "SubTitle";
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    optionPick={this.handlePick}
                />
                <Options
                    handleDeleteOption={this.handleDeleteOption}
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>

        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Jams"
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.optionPick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=>({ error }));
        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option</p>}
                {
                    props.options.map((cur) => (
                    <Option
                        key={cur}
                        optionText={cur}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};


const Option = (props) => {
    return(
        <div>
            <p>{props.optionText}</p>
            <button
                onClick={(e) =>{
                    props.handleDeleteOption(props.optionText);
                }}
            >remove</button>
        </div>
    );
};



ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));