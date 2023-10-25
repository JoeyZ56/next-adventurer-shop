"use client";
import React, { useState } from "react";
import styles from "./signup.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 200 && router.push("/auth/login");
    } catch (error) {
      setError("Failed to create account");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div>
            <button type="submit">SignUp</button>
          </div>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          <div>
            <Link href="/auth/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
