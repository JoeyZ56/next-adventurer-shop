"use client";
import React, { useState, useEffect } from "react";
import styles from "./login.module.scss";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (session === "authenticated") {
      router.push("/");
    }

    setError(params.get("Not Authenticated"));
    setSuccess(params.get("Authenticated"));
  }, [session, params, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          <div>
            <Link href="/auth/signup">SignUp</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
