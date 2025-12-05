import Login from '@Pages/Auth/Login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
    component: Login,
});
