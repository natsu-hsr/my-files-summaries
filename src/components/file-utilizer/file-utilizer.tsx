import React, {useState} from 'react';
import {Switch} from '@mantine/core';
import {IconSearch, IconUpload} from '@tabler/icons-react';

import Uploader from '../uploader/uploader';
import Search from '../search/search';
import {UtilizerTab} from './file-utilizer.types';

import classes from './file-utilizer.module.css';

const FileUtilizer = () => {
	const [tab, setTab] = useState<UtilizerTab>('search');
	const checked = tab === 'search';

	const handleChange = () => {
		setTab(p => p === 'search' ? 'upload' : 'search');
	}

  return (
    <div className={classes.wrapper}>
			<Switch
				className={classes.switch}
				checked={checked}
				onChange={handleChange}
				size='xl'
				onLabel={(
					<div className={classes.label}>
						search<IconSearch className={classes.icon} />
					</div>
				)}
				offLabel={(
					<div className={classes.label}>
						upload<IconUpload className={classes.icon} />
					</div>
				)}
			/>
			{tab === 'search' ? <Search /> : <Uploader />}
		</div>
  );
};

export default FileUtilizer;