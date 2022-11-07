import './Form.css'

function Form(){
    const sections = ['A','B','C','D','E','F','G','H','I','J','K','L']
    return <div className='main'>
        {sections.map((elem,i) => (
            <div>
                <div>
                    {elem}:
                    <br></br>
                    <input type="number"></input>
                    mg
                </div>
                <p style={{height:'1em'}}></p>
            </div>
        ))}
    </div>
}

export default Form