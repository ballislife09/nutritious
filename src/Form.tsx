import './Form.css'

function Form(){
    const sections = ['Proteins','Carbohydrates','Monkeys']
    return <div className='main'>
        {sections.map(elem => (
            <div>
                <div>
                    {elem}:
                    <br></br>
                    <input type="number"></input>
                    mg
                </div>
                <br></br>
            </div>
        ))}
    </div>
}

export default Form