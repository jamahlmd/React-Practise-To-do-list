/**
 * Created by Jams on 19/12/2017.
 */
/**
 * Created by Jams on 17/12/2017.
 */
/**
 * Created by Jams on 17/12/2017.
 */
console.log('App is running!');

const appObject = {
    title: <h1>Enge heading</h1>,
    subtitle: 'Dit is die subtitle',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();


    const option = e.target.elements.option.value;

    if(option){
        appObject.options.push(option);
        e.target.elements.option.value = "";
        renderOptionApp();
    }
};

const removeAll = () =>{
    appObject.options = [];
    renderOptionApp();
};

const onMake = () => {
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const selectedOption = appObject.options[randomNum];
    alert(selectedOption);
};

// JSX = Javascript XML

function renderOptionApp() {
    const template = (
        <div>
            {appObject.title}
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <button disabled={appObject.options.length === 0 && true} onClick={onMake}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    appObject.options.map((cur) => {
                        return <li key={cur}>{cur}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);

}


const appRoot = document.getElementById('app');


renderOptionApp();



