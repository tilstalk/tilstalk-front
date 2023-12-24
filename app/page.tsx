import LoginForm from "./ui/login-form";
import signBg from './assets/auth/sign-bg.jpg';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <div className="flex-auto relative" >
          <div className="absolute inset-0 bg-blue-500 opacity-50"></div>
          <Image className="object-cover h-screen" src={signBg} alt="Descrição da imagem" />

        </div>
        <div className="w-1/2 min-w-96">

          <LoginForm />
        </div>
      </div>
    </main>
  );
}
