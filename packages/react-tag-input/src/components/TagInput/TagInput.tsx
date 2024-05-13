import * as React from 'react';
import { Input, Tag, TagGroup, mergeClasses } from '@fluentui/react-components';
import { useControllableState } from '@fluentui/react-utilities';
import type { TagDismissEvent } from '@fluentui/react-components';
import { useTagInputStyles } from './TagInput.styles';
import type { TagInputState, TagInputEntry } from './TagInput.types';

export const TagInput: React.FC<TagInputState> = (state: TagInputState) => {
  const {
    disabled,
    appearance,
    size,
    shape,
    tags: PropTags,
    onTagsUpdated,
  } = state;
  const styles = useTagInputStyles();
  const [inputValue, setInputValue] = React.useState('');

  const [tags, setTags] = useControllableState({
    state: PropTags,
    initialState: [],
  });

  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateTags = (newTags: TagInputEntry[]) => {
    setTags(newTags);
    onTagsUpdated(newTags);
  };

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (disabled) {
        return;
      }
      // Handle Enter key down
      if (event.key == 'Enter') {
        event.preventDefault();
        const trimmedInputValue = inputValue.trim();

        if (trimmedInputValue.length > 0) {
          updateTags([
            ...tags,
            {
              value: trimmedInputValue,
              id: new Date().getTime().toString(),
            },
          ]);
          setInputValue('');
        }
      }

      // Handle Backspace key down
      if (event.key == 'Backspace' && inputValue.length === 0) {
        event.preventDefault();
        updateTags(tags.slice(0, -1));
      }
    },
    [inputValue, tags]
  );

  const removeItem = React.useCallback(
    (_e: TagDismissEvent, { value }: { value: string }) => {
      if (disabled) {
        return;
      }
      updateTags([...tags].filter((tag) => tag.id !== value));
    },
    [tags]
  );

  const onChange = React.useCallback(
    (_event: React.ChangeEvent, { value }: { value: string }) => {
      if (disabled) {
        return;
      }
      setInputValue(value);
    },
    []
  );

  const onClick = React.useCallback(() => {
    if (disabled) {
      return;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Change the size of the input element based on the length of the input value
  // This will make sure that the input element will go to the next line if the input value is too long
  React.useEffect(() => {
    if (inputRef.current) {
      const size = inputValue.length > 1 ? inputValue.length : 1;
      inputRef.current.setAttribute('size', size.toString());
    }
  }, [inputValue]);

  return (
    <div
      className={mergeClasses(styles.container, disabled && styles.disabled)}
      onClick={onClick}
    >
      <TagGroup
        className={styles.tagGroup}
        onDismiss={removeItem}
        role="listbox"
        aria-label="Tags container"
        aria-busy="true"
      >
        {tags.map((tag, index) => (
          <Tag
            role="option"
            id={index.toString()}
            disabled={disabled}
            appearance={appearance}
            size={size}
            shape={shape}
            className={mergeClasses(styles.tag, disabled && styles.disabled)}
            dismissible
            dismissIcon={{ 'aria-label': 'remove' }}
            value={tag.id}
            key={index}
          >
            {tag.value}
          </Tag>
        ))}
        <Input
          role="option"
          aria-label="Tag input box"
          ref={inputRef}
          disabled={disabled}
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={inputValue}
          className={styles.input}
        />
      </TagGroup>
    </div>
  );
};
