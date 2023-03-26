import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  width: max-content;
  display: flex;
  gap: 16px;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid black;
  padding: 8px;
  margin-top: 10px;
`;
