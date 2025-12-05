import Home from '@Pages/Home';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Home,
});
