import {FileWithPath} from '@mantine/dropzone';
import React, {useState} from 'react'
import FileList from '../file-list/file-list';

import classes from './uploader.module.css';
import DropzoneFileLoader from '../dropzone-file-loader/dropzone-file-loader';

const Uploader: React.FC = () => {
  const [fileList, setFileList] = useState<FileWithPath[]>([])
  
  return (
    <div className={classes.wrapper}>
      {fileList?.length ? (
        <FileList
          fileList={fileList}
          setFileList={setFileList}
        />
      ) : (
        <DropzoneFileLoader setFileList={setFileList} />
      )}
    </div>
  );
};

export default Uploader;