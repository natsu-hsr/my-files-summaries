import {Button, List, Title, Text, Group} from "@mantine/core";
import {FileWithPath} from "@mantine/dropzone";
import {IconFileNeutral, IconTrash} from "@tabler/icons-react";

import classes from './file-list.module.css';

interface FileListProps {
  fileList: FileWithPath[];
}

const FileList: React.FC<FileListProps> = ({fileList}: FileListProps) => {
  console.log('fileList=', fileList);

  const handleRemove = (fileName: string) => {
    const file = fileList.find(f => f.name === fileName);
    console.log('removing file...', file);
  }

  return (
    <Group
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
        Remove unwanted files and click upload button
      </Text>
      <List
        className={classes.list}
        icon={<IconFileNeutral className={classes.iconAlign} />}
        p='md'
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
      <Button>
        Upload all
      </Button>
    </Group>
  )
};

export default FileList;