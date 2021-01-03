import React, { useState } from 'react';
import useStorage from '../hooks/useStorage';
import ProgressBar from './ProgressBar'
const UploadForm = () => {
    //state for file
    const[file, setFile] = useState(null);
    //state for error
    const[error, setError] = useState(null);
    //Allowed upload types
    const types = ['image/png', 'image/jpeg', 'image/jpg'];


    //Event handler attached to file upload button
    const ChangeHandler = (e) => {
        
        

        //Get the selected file from the event
        let selected = e.target.files[0];

        //check and make sure filetype is valid
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        }
        else{
            setFile(null);
            setError('Please select a valid file of type JPEG or PNG.');

        }
    }
    
    return(
        <form>
            <label>
                <input type="File" onChange={ChangeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error } </div> }
                { file && <div> { file.name } </div>}
                { file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )

}

export default UploadForm;