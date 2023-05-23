import { RegisterForm } from "src/features/auth/register";
import { AuthLayout } from "src/layout/auth";
function Register() {
  return <RegisterForm />;
}

Register.getLayout = function (page) {
  return (
    <AuthLayout title="Register Page" description="Welcome To Task Manager">
      {page}
    </AuthLayout>
  );
};

export default Register;
