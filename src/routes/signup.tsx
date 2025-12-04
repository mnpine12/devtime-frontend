import { createFileRoute } from '@tanstack/react-router';

import SignUp from '../pages/Auth/SignUp';

export const Route = createFileRoute('/signup')({
  component: SignUp,
});
