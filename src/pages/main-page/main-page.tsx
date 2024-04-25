import {Container, Group} from '@mantine/core';
import React from 'react';
import {IconFileSmile} from '@tabler/icons-react';

import classes from './main-page.module.css';
import FileUtilizer from '../../components/file-utilizer/file-utilizer';

const MainPage: React.FC = () => {
  return (
    <Container className={classes.container} size='xl'>
      <Group justify='center'>
        <div className={classes.title}>
          My files summaries
          <IconFileSmile className={classes.icon} />
        </div>
        <div
          className={classes.description}
        >
          Upload your summaries/notes/conspectus in your own library and use search by words you want!
        </div>
      </Group>
      <FileUtilizer />
    </Container>
  )
}

export default MainPage;