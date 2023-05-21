import { LoginForm } from "src/features/auth/login";
import { AuthLayout } from "src/layout/auth";

function Login() {
  return <LoginForm />;
}

Login.getLayout = function (page) {
  return (
    <AuthLayout title="Login Page" description="Welcome To Task Manager">
      {page}
    </AuthLayout>
  );
};

export default Login;
