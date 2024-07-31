import React, { useState } from 'react';
import './styles.css';

function FileUpload({ name, onFileChange }) {
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file);
        onFileChange(file); // File ni yuqoridagi funksiyaga yuboring
    };

    return (
        <div className="file-upload-container rounded-xl">
            <div className="center">
                <div className="title">
                    <h1>Drop file to upload</h1>
                </div>
                <div className="dropzone cursor-pointer">
                    {fileName ? (
                        <img src={URL.createObjectURL(fileName)} alt="img" className="uploaded-img" />
                    ) : (
                        <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" alt="upload icon" />
                    )}
                    <input
                        name={name}
                        onChange={handleFileChange}
                        type="file"
                        className="upload-input cursor-pointer"
                    />
                </div>
                {fileName ? (
                    <p className="text-lg ">{fileName?.name}</p>
                ) : (
                    <button type="button" className="btn" name="uploadbutton">Upload file</button>
                )}
            </div>
        </div>
    );
}

export default FileUpload;