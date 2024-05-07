import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';

export const ControlledTags = () => {
  const [tags, setTags] = React.useState([
    {
      id: '1',
      value: 'Tag 1',
    },
  ]);

  const onClick = React.useCallback(() => {
    setTags([
      ...tags,
      {
        id: new Date().getTime().toString(),
        value: `A new tag is born`,
      },
    ]);
  }, [tags]);
  return (
    <>
      <TagInput onTagsUpdated={setTags} tags={tags} />
      <br />
      <button onClick={onClick}>Add Tag</button>
    </>
  );
};
