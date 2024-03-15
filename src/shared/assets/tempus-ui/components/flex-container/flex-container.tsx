import React from 'react';
import styles from './flexContainer.module.scss';
import classNames from 'classnames';

export enum FlexDirection {
  ROW = 'row',
  COLUMN = 'column',
}

export enum FlexJustifyContent {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
}

export enum FlexAlignItems {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  STRETCH = 'stretch',
}

export enum FlexWrap {
  NO_WRAP = 'nowrap',
  WRAP = 'wrap',
  WRAP_REVERSE = 'wrap-reverse',
}

export enum FlexAlignContent {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  STRETCH = 'stretch',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
}

interface FlexContainerProps {
  direction?: FlexDirection;
  justifyContent?: FlexJustifyContent;
  alignItems?: FlexAlignItems;
  flexWrap?: FlexWrap;
  alignContent?: FlexAlignContent;
  className?: string;
  children: React.ReactNode;
  gap?: number;
}

const FlexContainer: React.FC<FlexContainerProps> = ({
  direction = FlexDirection.ROW,
  justifyContent = FlexJustifyContent.START,
  alignItems = FlexAlignItems.STRETCH,
  flexWrap = FlexWrap.NO_WRAP,
  alignContent = FlexAlignContent.STRETCH,
  gap,
  className,
  children,
}) => {
  return (
    <div
      className={classNames(styles.container, className)}
      style={{
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexWrap: flexWrap,
        alignContent: alignContent,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
