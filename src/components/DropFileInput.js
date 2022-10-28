import React, { useState, useRef } from 'react'
import "./dropFileInput.css"
import PropTypes from 'prop-types'
import uploadImg from "../assets/cloud-upload-regular-240.png"

const DropFileInput = props => {
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }


    return (
        <>
            <div className='drop-file-input' ref={wrapperRef} onDragEnter={onDragEnter} onDragLeave={onDragLeave}>
                <div className='.drop-file-input__label'>
                    <img src={uploadImg} alt=""></img>
                </div>
                <p>Drop your file or click here to search thriugh your files</p>
                <input type="file" name="files" value="" onChange={onFileDrop} ></input>
            </div>
            <div className='fileList' >
                {fileList.length > 0 && (
                    <div className='drop-file-preview'>
                        {fileList.map((f) => {
                            return <p>{f.name}</p>
                        })}
                    </div>
                )}
            </div>
        </>
    )
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput