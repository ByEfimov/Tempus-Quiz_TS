import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const { userToken } = router.query;
  return <div>User ID: {userToken}</div>;
}

export default Login;
