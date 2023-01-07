import style from './UploadBox.module.scss';
import upload from '../../assets/upload.png';
import cn from 'classnames';
import { ChangeEvent, useState, useEffect } from 'react';

const UploadBox = () => {
    const [uploadedFile, setUploadedFile] = useState<File>();
    const [acceptedFiles, setAcceptedFiles] = useState([
        {
            selectedFile: {},
            fileName: '',
            fileSize: 0
        }
    ]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files !== null && files !== undefined) {
            const fileList = files;
            const selectedFile = fileList[0];
            const fileName = fileList[0].name;
            const fileSize = fileList[0].size;
            setUploadedFile(selectedFile);
            setAcceptedFiles([
                ...acceptedFiles,
                {
                    selectedFile,
                    fileName,
                    fileSize
                }
            ]);
        }
    };

    const data = [{ name: 'luk' }];
    // console.log(uploadedFile?.name);

    useEffect(() => {
        localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFile));
    }, [uploadedFile]);

    return (
        <div className={style.upLoadBox}>
            <img src={upload} alt="upload files icon" />
            {acceptedFiles.length != 0 && (
                <p className={style.upLoadBox__paragraph}>
                    ( File accepted: pdf. doc/ docx -<br />
                    Max file size : 150kb for demo limit )
                </p>
            )}
            {acceptedFiles.length != 0 &&
                acceptedFiles.map((file) => {
                    return (
                        <ul key={file.fileSize}>
                            <li key={file.fileSize} className={style.upLoadBox__fileList}>{file.fileName}</li>
                        </ul>
                    );
                })}

            <input
                type="file"
                accept=".doc, .docx, .pdf"
                onChange={handleChange}
                className={cn(style.upLoadBox__btn, style.upLoadBox__input)}
            />
        </div>
    );
};

export default UploadBox;
