import {CloseButton, TextInput, Title} from '@mantine/core';
import React, {useState} from 'react';

import classes from './search.module.css';

const Search = () => {
	const [value, setValue] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value: inputValue} = event.target;
		setValue(inputValue);
	}

	return (
		<>
			<Title
				pb='md'
				w='100%'
				ta='center'
			>
				Search
			</Title>
			<TextInput
				className={classes.input}
				value={value}
				onChange={handleChange}
				placeholder="Type here anything you want to find in your files..."
				rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
			/>
		</>
	)
}

export default Search;