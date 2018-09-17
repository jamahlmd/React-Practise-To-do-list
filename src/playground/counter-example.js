
//LOGICAL AND OPERATOR
// {appObject.subtitle && <p>{appObject.subtitle}</p>}
// gebruik je als er iets moet gebeuren bij true, maar FALSE bij niet


// TERNARY OPERATORS
/*<p>{appObject.options.length > 0 ? "Here are your options" : "No Options"}</p>*/
//gebruik je als er iets meot gebeuren bij true EN false
// const user = {
//     name: ' Jams',
//     age: 23,
//     location: "ally"
//
// };
// function getLocation(location) {
//     if(location){
//         return <p>Location : {location}</p>;
//     }
// }
//
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Uknown'}</h1>
//         {user.age >= 18 && <p>Age : {user.age}</p>}
//         {
//             getLocation(user.location)
//         }
//     </div>
// );

console.log("Counter App");


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        const count = parseInt(localStorage.getItem('number'),10);

        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            const number = localStorage.setItem('number', this.state.count);
        }
    }
    handleAddOne(){
        this.setState((PreviousState) =>{
           return {
               count: PreviousState.count +1
           };
        });
    }
    handleMinusOne(){
       this.setState((previousState) =>{
          return {
              count: previousState.count - 1
          };
       });
    }
    handleReset(){
        this.setState(() =>{
            return {
                count: 0
            };
        });
    }
    render(){
        return(
          <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.handleAddOne}>+1</button>
              <button onClick={this.handleMinusOne}>-1</button>
              <button onClick={this.handleReset}>Reset</button>
          </div>
        );
    }
}


ReactDOM.render(<Counter/>,document.getElementById('app'));