import Image from 'next/image';
import { signIn } from 'next-auth/client';
import { FB_IMAGE } from '../helpers/icons';

function Login() {
  return (
    <div className="grid place-items-center">
      <Image src={FB_IMAGE} height={400} width={400} objectFit="contain" />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-400 rounded-full text-white text-center cursor-pointer"
      >
        Login
      </h1>
    </div>
  );
}

export default Login;
