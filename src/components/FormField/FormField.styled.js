import styled from "styled-components";
import {ErrorMessage as FormikErrorMessage } from 'formik';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${p => p.theme.colors.error};
`;
