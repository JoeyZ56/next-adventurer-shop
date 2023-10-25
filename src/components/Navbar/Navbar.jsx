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
        <Link href="/smithy">Smithy</Link>
        <Link href="/potions">Potions</Link>
        <Link href="/magic">Magic</Link>
        <Link href="/neworder">New Order</Link>
        <Link href="/previousorders">Buy Agian</Link>
        <Link href="/wishlist">Wishlist</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">SignUp</Link>
      </div>
    </div>
  );
}

//add useSession to make sure none logined in people can't see the previous order or wishlist
