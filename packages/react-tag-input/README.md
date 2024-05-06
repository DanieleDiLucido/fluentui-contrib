# react-tag-input

This package contains the TagInput component a custom component that contains an text input and will transform and display the text into `Tags` component when pressing `Enter`.

## Actions

- A new Tag will be shown when pressing `Enter` on the text input field
- The Tags can removed by clicking on them or by pressing `Enter` when the Tag is the active element.
- The last Tag can be removed by pressing `Backspace` from the text input field

## Property

The TagInput component can accept the following parameters

|name|type|default|mandatory|note|
|:-|:---|:-|:-|:-|
| onTagsUpdated | (tags: Tag[]) => void | - | Yes | Callback function used to update the parent of with the current tags|
|tags|Tag[]|[]|No|List Of Tags that will be rendered in the component|
|disabled|Boolean|false|No| used to disable the component and prevent any action|
|appearance|'filled' \| 'brand' \| 'outline'|'filled'|No| used to define the Tag appearance - check FluentUI V9 documentation for more info|
|shape| 'circular' \| 'rounded'|'circular'|No| used to define the Tag shape - check FluentUI V9 documentation for more info|
|size| 'small' \| 'extra-small' \| 'medium'|'medium'|No| used to define the Tag size - check FluentUI V9 documentation for more info|

## Build And Test

### Storybook

Run `nx run react-tag-input:storybook ` to start the Storybook

### Building

Run `nx build react-tag-input` to build the library.

### Running unit tests

Run `nx test react-tag-input` to execute the unit tests via [Jest](https://jestjs.io).
