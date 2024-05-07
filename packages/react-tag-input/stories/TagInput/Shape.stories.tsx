import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';

const tagList = [
  {
    id: '1',
    value: 'Tag 1',
  },
];

export const ShapeCircular = () => {
  const [tags, setTags] = React.useState(tagList);

  return <TagInput onTagsUpdated={setTags} tags={tags} shape="circular" />;
};

export const ShapeRounded = () => {
  const [tags, setTags] = React.useState(tagList);

  return <TagInput onTagsUpdated={setTags} tags={tags} shape="rounded" />;
};
