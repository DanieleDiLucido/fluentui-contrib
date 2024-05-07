import * as React from 'react';
import { TagInput } from '@fluentui-contrib/react-tag-input';
import type { TagInputEntry } from '@fluentui-contrib/react-tag-input';

const onTagsUpdated = (tags: TagInputEntry[]) => {
  console.log(tags);
};

export const Default = () => <TagInput onTagsUpdated={onTagsUpdated} />;
