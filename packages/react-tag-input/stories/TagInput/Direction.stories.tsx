import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';

const tagList = [
  {
    id: '1',
    value: 'Tag 1',
  },
];

export const RTL = () => {
  const [tags, setTags] = React.useState(tagList);

  return (
    <div dir="rtl">
      <TagInput onTagsUpdated={setTags} tags={tags} />
    </div>
  );
};

export const LTR = () => {
  const [tags, setTags] = React.useState(tagList);

  return (
    <div dir="ltr">
      <TagInput onTagsUpdated={setTags} tags={tags} />
    </div>
  );
};
