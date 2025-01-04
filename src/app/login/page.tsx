import { LoginForm } from "./_components/LoginForm";
import { BackButton } from "./_components/BackButton";

export default function LoginPage() {
  return (
    <div className="h-screen bg-pink-light p-12 space-y-6 md:space-y-12">
      <BackButton />
      <div className="space-y-6">
        <h1 className="place-self-center text-lg lg:text-2xl font-bold text-blue-dark">
          Login
        </h1>

        <LoginForm />
      </div>
    </div>
  );
}
