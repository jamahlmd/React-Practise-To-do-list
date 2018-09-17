
class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            show: true
        }
    }
    handleToggle(){
        this.setState((prev)=>{
           return {
               show: !prev.show
           };
        });
    }
    render(){
        return (
          <div>
              <h1>Visibility toggle</h1>
              <button onClick={this.handleToggle}>Toggle Visibility</button>
              {this.state.show === true && <p>Details Hier</p>}
          </div>
        );
    }
}


ReactDOM.render(<Visibility/>,document.getElementById('app'));
