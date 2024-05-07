export type TagInputEntry = {
  value: string;
  id: string;
};

export type TagInputState = {
  onTagsUpdated: (tags: TagInputEntry[]) => void;
  tags?: TagInputEntry[];
  disabled?: boolean;
  appearance?: 'filled' | 'brand' | 'outline';
  shape?: 'circular' | 'rounded';
  size?: 'small' | 'extra-small' | 'medium';
};
