import styled from 'styled-components';

export const STATUS_COLORS = [
  { label: 'Relative', status: 'relative', color: ['#03DCA4', '#D6D6D6'] },
  { label: 'Neutral', status: 'neutral', color: ['#F9F9F9', '#D6D6D6'] },
  { label: 'Positive', status: 'positive', color: ['#FF8886', '#D6D6D6'] },
  { label: 'Important', status: 'important', color: ['#FFCE00', '#FFFFFF'] },
  { label: 'Domain', status: 'domain', color: ['#1890FF3D', '#1890FF3D'] },
];

const Container = styled.div`
  ${STATUS_COLORS.map(
    (item) =>
      `&[data-status='${item.status}'] { > i { background: ${item.color[0]}; border-color: ${item.color[1]}; }`
  )}
`;

export default (props) => {
  return <Container>Legend</Container>;
};
