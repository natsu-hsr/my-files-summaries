import { Group, Text, Title} from '@mantine/core';
import { Dropzone, FileWithPath, MIME_TYPES} from '@mantine/dropzone';
import { IconDownload, IconX, IconCloudUpload} from '@tabler/icons-react';
import React, {useRef} from 'react'

import {UploaderCommonProps} from '../uploader/uploader.types';

import classes from './dropzone-file-loader.module.css';

type DropzoneFileLoaderProps = Pick<UploaderCommonProps, 'setFileList'>;

const DropzoneFileLoader: React.FC<DropzoneFileLoaderProps> = ({
  setFileList,
}: DropzoneFileLoaderProps) => {
  const openRef = useRef<() => void>(null);

  const handleDrop = (files: FileWithPath[]) => {
    setFileList(files);
  }

  return (
    <>
      <Title
        pb='md'
        w='100%'
        ta='center'
      >
        Upload your files here
      </Title>
      <Dropzone
        openRef={openRef}
        onDrop={handleDrop}
        className={classes.dropzone}
        accept={[MIME_TYPES.pdf]}
        maxSize={30 * 1024 ** 2}
        acceptColor='#329932'
        rejectColor='#d14249'
      >
        <Group
          justify='center'
          style={{ pointerEvents: 'none' }}
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
    </>
  );
};

export default DropzoneFileLoader;