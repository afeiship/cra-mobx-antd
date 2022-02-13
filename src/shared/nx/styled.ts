import View from '@jswork/styled-box';
import styled from 'styled-components';

Object.assign(View.defaultProps, {
  styled,
  plugins: [
    require('@jswork/styled-plugin-absolute-center').default,
    require('@jswork/styled-plugin-flexbox').default,
    require('@jswork/styled-plugin-transform-center').default,
    require('@jswork/styled-plugin-line').default,
    require('@jswork/styled-plugin-absolute-rect').default,
  ],
});
