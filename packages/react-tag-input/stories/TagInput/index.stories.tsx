import { Meta } from '@storybook/react';
import { TagInput } from '@fluentui-contrib/react-tag-input';

export { Default } from './Default.stories';
export { PrefilledTags } from './PrefilledTags.stories';
export { Disabled } from './Disabled.stories';
export {
  AppearanceBrand,
  AppearanceFilled,
  AppearanceOutline,
} from './Appearance.stories';
export { ShapeRounded, ShapeCircular } from './Shape.stories';
export { SizeXs, SizeMedium } from './Size.stories';
export { RTL, LTR } from './Direction.stories';

const meta: Meta<typeof TagInput> = {
  component: TagInput,
};

export default meta;
