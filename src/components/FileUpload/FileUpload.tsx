import {FC} from 'react';
import style from './FileUpload.module.scss';
import upload from '../../assets/upload.png';
import cn from 'classnames';
import { Controller } from 'react-hook-form';
import { ChangeEvent, useState, useEffect } from 'react';
import { TypeOf } from 'yup';

type fileType = {
    selectedFile: object;
    fileName: string;
    fileSize: number;
};

// interface acceptedFiles {
//     acceptedFiles: fileType[];
// }

interface IFile {
    fileName: string;
    fileSize: number;
}

interface IFileUpload {
    name: string;
    control: any;
    acceptedFiles?: fileType[] | null;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: FC<IFileUpload> = ({name, control, acceptedFiles, handleChange}) => {
 

    // const data = [{ name: 'luk' }];
    // console.log(uploadedFile?.name);

    // useEffect(() => {
    //     localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFile));
    // }, [uploadedFile]);

    return (
        <div className={style.upLoadBox}>
            <img src={upload} alt="upload files icon" />
            {acceptedFiles?.length != 0 && (
                <p className={style.upLoadBox__paragraph}>
                    ( File accepted: pdf. doc/ docx -<br />
                    Max file size : 150kb for demo limit )
                </p>
            )}
            {acceptedFiles?.length != 0 &&
                acceptedFiles?.map((file) => {
                    return (
                        <ul key={file.fileName}>
                            <li
                                key={file.fileName}
                                className={style.upLoadBox__fileList}
                            >
                                {file.fileName}
                            </li>
                        </ul>
                    );
                })}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type="file"
                        accept=".doc, .docx, .pdf"
                        onChange={handleChange}
                        className={cn(
                            style.upLoadBox__btn,
                            style.upLoadBox__input
                        )}
                    />
                )}
            />
        </div>
    );
};

export default FileUpload;
