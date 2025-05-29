import Image from "next/image";
import Head from "next/head";
import Hero from "@/components/home/Hero";
import OurAvatar from "@/components/home/OurAvatar";
import DaftarSekarang from "@/components/home/DaftarSekarang";

export default function Home() {
  return (
    <>
      <Hero />
      <OurAvatar />
      <DaftarSekarang />
    </>
  );
}
