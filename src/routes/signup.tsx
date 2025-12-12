import SignUp from '@Pages/Auth/Signup';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/signup')({
    component: SignUp,
});
