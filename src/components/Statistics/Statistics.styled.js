import styled from '@emotion/styled';

export const Feedback = styled.li`
  display: flex;
  align-items: baseline;
  gap: 10px;

  font-weight: 500;
  margin-bottom: 10px;
  letter-spacing: 2px;

  &::after {
    content: '';
    height: 1px;
    display: inline-block;
    flex-grow: 1;
    background-color: rgba(255, 255, 255);
  }
`;

export const Count = styled.span`
  font-weight: 600;
  order: 2;
`;
