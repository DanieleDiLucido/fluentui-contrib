import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';
import type { Tag } from '@fluentui-contrib/react-tag-input';

const onTagsUpdated = (tags: Tag[]) => {
  console.log(tags);
};

export const Default = () => (
  <TagInput onTagsUpdated={onTagsUpdated} tags={[]} />
);
