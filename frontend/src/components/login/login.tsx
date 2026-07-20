"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconLoader2,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // for success or error alerts
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const { refreshAuth } = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const endpoint = isLogin
        ? "http://localhost:8000/auth/login"
        : "http://localhost:8000/auth/signup";

      const body = isLogin
        ? JSON.stringify({ email, password })
        : JSON.stringify({
            name: `${firstname} ${lastname}`.trim(),
            email: email,
            password: password,
            role: "user", //default role
          });

      const response = await fetch(endpoint, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          typeof data.message === "string"
            ? data.message
            : typeof data.detail === "string"
              ? data.detail
              : isLogin
                ? "Login successful!"
                : "Sign up successful!",
        );
        if (isLogin) {
          await refreshAuth();
          // Switch to login mode after successful signup
          const redirectUrl = searchParams.get("redirect") || "/";
          // Small delay so user can see the success message
          setTimeout(() => router.push(redirectUrl), 1000);
        }
      } else {
        if (Array.isArray(data.detail)) {
          setMessage(data.detail[0].msg);
        } else if (typeof data.detail === "string") {
          setMessage(data.detail);
        } else {
          setMessage(isLogin ? "Failed to login" : "Failed to sign up");
        }
      }
    } catch (error) {
      console.log(
        isLogin
          ? "Error occured during login: "
          : "Error occured during signUp: ",
        error,
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        {isLogin ? "Welcome Back to Aceternity" : "Welcome to Aceternity"}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        {isLogin
          ? "Login to Ai Analyzer to continue."
          : "Login to Ai Analyzer and start analyzing resumes with ease."}
      </p>

      {/* Display success/error messages to the user */}
      {message && (
        <div className="mt-4 text-sm font-medium text-center text-blue-600 dark:text-blue-400">
          {message}
        </div>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required={!isLogin}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </LabelInputContainer>
          </div>
        )}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              {showPassword ? (
                <IconEyeOff className="h-5 w-5" />
              ) : (
                <IconEye className="h-5 w-5" />
              )}
            </button>
          </div>
        </LabelInputContainer>

        <button
          className="group/btn relative flex items-center justify-center h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <IconLoader2 className="h-5 w-5 animate-spin" />
              {isLogin ? "Signing in..." : "Signing up..."}
            </span>
          ) : (
            <span>{isLogin ? "Sign in \u2192" : "Sign up \u2192"}</span>
          )}
          <BottomGradient />
        </button>

        <div className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-300">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
            className="font-medium text-indigo-500 hover:underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </div>

        <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
