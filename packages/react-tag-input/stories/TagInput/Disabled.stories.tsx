import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';

export const Disabled = () => {
  const [tags, setTags] = React.useState([
    {
      id: '1',
      value: 'Tag 1',
    },
  ]);

  return <TagInput disabled onTagsUpdated={setTags} tags={tags} />;
};
