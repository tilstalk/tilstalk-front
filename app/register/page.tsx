import RegisterForm from '../ui/register-form';
import registerBg from '../assets/auth/register-bg.jpg';
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main>
      <div className="flex flex-row">
        <div className="flex-auto relative" >
          <div className="absolute inset-0 bg-blue-500 opacity-50"></div>
          <Image className="object-cover h-screen" src={registerBg} alt="Descrição da imagem" />
        </div>
        <div className="w-1/2 min-w-96">

          <RegisterForm />
        </div>
      </div>
    </main>
  );
}