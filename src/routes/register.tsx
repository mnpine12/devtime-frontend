import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/register')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>회원가입</div>;
}
