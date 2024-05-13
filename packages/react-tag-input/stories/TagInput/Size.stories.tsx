import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';

const tagList = [
  {
    id: '1',
    value: 'Tag 1',
  },
];

export const SizeS = () => {
  const [tags, setTags] = React.useState(tagList);

  return <TagInput onTagsUpdated={setTags} tags={tags} size="small" />;
};
export const SizeXs = () => {
  const [tags, setTags] = React.useState(tagList);

  return <TagInput onTagsUpdated={setTags} tags={tags} size="extra-small" />;
};

export const SizeMedium = () => {
  const [tags, setTags] = React.useState(tagList);

  return <TagInput onTagsUpdated={setTags} tags={tags} size="medium" />;
};
