import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4px;
`;

export const Title = styled.h3`
  margin-bottom: 3px;
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Badge = styled.span`
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
  /* Выбор фона плашки в зависимости от переданного пропса difficulty */
  background-color: ${p => {
    return p.active ? p.theme.colors.accent : p.theme.colors.white;
  }};
`;
