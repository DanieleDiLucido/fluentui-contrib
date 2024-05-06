import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';
import type { Tag } from '@fluentui-contrib/react-tag-input';

const tags = [
  {
    id: '1',
    value: 'Tag 1',
  },
  {
    id: '2',
    value: 'Tag 2',
  },
] as Tag[];

const onTagsUpdated = (tags: Tag[]) => {
  console.log(tags);
};

export const Disabled = () => (
  <TagInput disabled onTagsUpdated={onTagsUpdated} tags={tags} />
);
