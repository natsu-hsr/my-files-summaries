import {Container, Group, Text} from '@mantine/core';
import React from 'react';
import Uploader from '../../components/uploader/uploader';
import {IconFileSmile} from '@tabler/icons-react';

import classes from './main-page.module.css';

import fileIcon from '../../shared/assets/file-check.svg';

const MainPage = () => {
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
      <Uploader />
    </Container>
  )
}

export default MainPage;