import { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';

export function useUser() {
  const values = useContext(UserContext);
  return values;
}
