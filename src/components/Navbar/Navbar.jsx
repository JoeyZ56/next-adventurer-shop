"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.routes}>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">SignUp</Link>
      </div>
    </div>
  );
}
