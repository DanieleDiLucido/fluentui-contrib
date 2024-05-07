import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';

export const PrefilledTags = () => {
  const [tags, setTags] = React.useState([
    {
      id: '1',
      value: 'Tag 1',
    },
  ]);

  return <TagInput onTagsUpdated={setTags} tags={tags} />;
};
