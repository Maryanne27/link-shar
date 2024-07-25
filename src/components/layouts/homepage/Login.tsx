"use client";
import { useRef, useState } from "react";
import DevlinksLogoLg from "@/assets/DevlinksLogoLg";
import EmailIcon from "@/assets/EmailIcon";
import LockIcon from "@/assets/LockIcon";
import Button from "@/app/components/Button";
import { doCredentialsLogin } from "@/app/actions/index";
import { useRouter } from "next/navigation";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    if (!emailRef.current || !passwordRef.current) {
      setLoginError("Please fill in all fields.");
      return;
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setLoginError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setLoginError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const res = await doCredentialsLogin(formData);
      if (!!res.error) {
        setLoginError("Failed to login. Please check your credentials.");
      } else {
        router.push("/home");
      }
    } catch (e) {
      console.error(e);
      setLoginError("An error occurred during login. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-8 px-4 md:px-8">
      <DevlinksLogoLg />

      <div className="w-full max-w-md mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        <p className="text-gray-600">
          Add your details below to get back into the app
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto space-y-6"
      >
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <EmailIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="e.g. alex@email.com"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LockIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
              placeholder="Enter your password"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {loginError && <p className="text-sm text-red-600">{loginError}</p>}

        <Button
          className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
        >
          Login
        </Button>
      </form>

      <p className="text-center text-gray-500 mt-6">
        Don&apos;t have an account?{" "}
        <button
          onClick={() => router.push("/signup")}
          className="text-purple-600 hover:underline"
        >
          Create account
        </button>
      </p>
    </main>
  );
}
