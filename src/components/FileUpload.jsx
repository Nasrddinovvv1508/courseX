import React from 'react';
import './styles.css';

function FileUpload() {
    return (
        <div className="file-upload-container rounded-xl">
            <div className="center">
                <div className="title">
                    <h1>Drop file to upload</h1>
                </div>
                <div className="dropzone">
                    <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" alt="upload icon" />
                    <input type="file" className="upload-input" />
                </div>
                <button type="button" className="btn" name="uploadbutton">Upload file</button>
            </div>
        </div>
    );
}

export default FileUpload;