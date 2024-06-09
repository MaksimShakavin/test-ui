'use client';
import * as React from 'react';
import {Button as ButtonBase, ButtonProps} from "@mui/base";

export const Button = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>) {
  const {
    slotProps = {
      root: {}
    },
    ...rest
  } = props;
  return (
    <ButtonBase
      {...rest}
      ref={ref}
      slotProps={{
        root: () => ({
          ...slotProps.root,
          className: 'p-3 rounded-full bg-violet-500'
        })
      }}
    >
      {rest.children}
    </ButtonBase>
  );
});
