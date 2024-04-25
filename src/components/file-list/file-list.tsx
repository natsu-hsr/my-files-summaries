import {Button, List, Title, Text, Group} from "@mantine/core";
import {IconTrash} from "@tabler/icons-react";

import {UploaderCommonProps} from "../uploader/uploader.types";

import classes from './file-list.module.css';
import indexClasses from '/src/shared/styles/index.module.css';

const FileList: React.FC<UploaderCommonProps> = ({fileList, setFileList}: UploaderCommonProps) => {
const handleRemove = (fileName: string) => {
    // const file = fileList.find(f => f.name === fileName);
    setFileList(p => p.filter(f => f.name !== fileName))
    // console.log('removing file...', file);
  }

  
  const handleUpload = () => {
    console.log('uploading...');
  }

  return (
    <Group
      pos='relative'
      justify='center'
      gap='0'
    >
      <Title
        pb='xs'
        w='100%'
        ta='center'
      >
        Files to upload
      </Title>
      <Text
        pb='md'
      >
        Remove unwanted files is needed and click upload button
      </Text>
      <List
        className={classes.list}
        type='ordered'
        p='xl'
      >
        {fileList?.map(f => (
          <List.Item
            className={classes.item}
            key={f.name}
          >
            {f.name}
            <IconTrash
              className={`${classes.iconAlign} ${classes.deleteIcon}`}
              onClick={() => handleRemove(f.name)}
            />
          </List.Item>
        ))}
      </List>
      <Button
        className={`${indexClasses.btnActive} ${classes.btnSubmit}`}
        onClick={handleUpload}
      >
        Upload all
      </Button>
    </Group>
  )
};

export default FileList;