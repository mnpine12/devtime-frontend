import SignUp from '@Pages/Auth/SignUp';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/signup')({
    component: SignUp,
});
