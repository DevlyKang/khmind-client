import tw, { styled, css } from 'twin.macro';

export const Header = styled.div.attrs({
  role: 'banner',
})(() => [
  tw`bg-gray-800 flex`,
]);
