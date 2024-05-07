import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';
import type { TagInputEntry } from '@fluentui-contrib/react-tag-input';

const onTagsUpdated = (tags: TagInputEntry[]) => {
  console.log(tags);
};

const tags = [
  {
    id: '1',
    value: 'Tag 1',
  },
] as TagInputEntry[];

export const AppearanceOutline = () => (
  <TagInput onTagsUpdated={onTagsUpdated} tags={tags} appearance="outline" />
);

export const AppearanceFilled = () => (
  <TagInput onTagsUpdated={onTagsUpdated} tags={tags} appearance="filled" />
);

export const AppearanceBrand = () => (
  <TagInput onTagsUpdated={onTagsUpdated} tags={tags} appearance="brand" />
);
