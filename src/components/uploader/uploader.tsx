import {Group, Text} from '@mantine/core';
import {Dropzone, FileWithPath, MIME_TYPES} from '@mantine/dropzone';
import React, {useRef, useState} from 'react'
import {IconCloudUpload, IconX, IconDownload} from '@tabler/icons-react';
import FileList from '../file-list/file-list';

import classes from './uploader.module.css';

const Uploader: React.FC = () => {
  const openRef = useRef<() => void>(null);

  const [fileList, setFileList] = useState<FileWithPath[]>([])

  const handleDrop = (files: FileWithPath[]) => {
    setFileList(files);
  }
  
  return (
    <div className={classes.wrapper}>
      {fileList?.length ? (
        <FileList
          fileList={fileList}
        />
      ) : (
        <Dropzone
          openRef={openRef}
          onDrop={handleDrop}
          className={classes.dropzone}
          accept={[MIME_TYPES.pdf]}
          maxSize={30 * 1024 ** 2}
          acceptColor='#329932'
          rejectColor='#d14249'
          p='xl'
        >
            <Group
              justify='center'
              style={{pointerEvents: 'none'}}
            >
              <Dropzone.Accept>
                <IconDownload
                  className={classes.icon}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  className={classes.icon}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload
                  className={classes.icon}
                  stroke={1.5}
                />
              </Dropzone.Idle>
            </Group>
            <Text
              ta="center"
              fw={700}
              fz="lg"
              mt="xs"
            >
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Sorry, only pdf files less than 30mb :(</Dropzone.Reject>
              <Dropzone.Idle>Upload your files</Dropzone.Idle>
            </Text>
            <Text
              ta="center"
              fz="sm"
              mt="xs"
              c="dimmed"
            >
              Drag&apos;n&apos;drop files here or click to upload.
              <br />Only <i>.pdf</i> files {'<'} than 30mb are acceptable.
            </Text>
        </Dropzone>
      )
      }
    </div>
  );
}

export default Uploader;