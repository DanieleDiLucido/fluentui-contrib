export type Tag = {
  value: string;
  id: string;
};

export type TagInputState = {
  onTagsUpdated: (tags: Tag[]) => void;
  tags?: Tag[];
  disabled?: boolean;
  appearance?: 'filled' | 'brand' | 'outline';
  shape?: 'circular' | 'rounded';
  size?: 'small' | 'extra-small' | 'medium';
};
