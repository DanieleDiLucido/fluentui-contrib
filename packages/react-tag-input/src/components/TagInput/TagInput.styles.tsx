import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useTagInputStyles = makeStyles({
  container: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    ...shorthands.border('1px'),
    ...shorthands.borderRadius('4px'),
    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralForeground3),
    ...shorthands.borderStyle('solid'),
    ...shorthands.padding('4px'),
    cursor: 'text',
    minWidth: '24px',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    '::after': {
      display: 'block',
      left: 0,
      right: 0,
      bottom: 0,
      boxSizing: 'border-box',
      content: '""',
      position: 'absolute',
      width: '100%',
      backgroundColor: tokens.colorNeutralBackground3,
      height: '2px',
      transform: 'scaleX(0)',
      transitionProperty: 'transform',
      transitionDuration: tokens.durationUltraFast,
      transitionDelay: tokens.curveAccelerateMid,
    },
    ':focus-within::after': {
      backgroundColor: tokens.colorCompoundBrandStroke,
      transitionDuration: tokens.durationNormal,
      transform: 'scaleX(100%)',
    },
  },
  disabled: {
    color: tokens.colorNeutralForegroundDisabled,
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    cursor: 'not-allowed',
    '::after': {
      display: 'none',
    },
  },
  tagGroup: {
    display: 'flex',
    minWidth: '100%',
    maxWidth: '100%',
    flexWrap: 'wrap',
    rowGap: '6px',
    marginRight: '6px',
    alignItems: 'center',
  },
  tag: {
    maxWidth: '100%',
    cursor: 'pointer',
    '>span': {
      ...shorthands.overflow('hidden'),
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  input: {
    ...shorthands.border('none'),
    paddingLeft: '8px',
    paddingRight: '8px',
    display: 'flex',
    flexGrow: 1,
    maxWidth: '100%',
    backgroundColor: 'transparent',
    '::after': {
      content: 'none',
    },
  },
});
