'use client';
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Rangkaian from "@/components/home/Rangkaian";
import Timeline from "@/components/home/Timeline";
import OurAvatar from "@/components/home/OurAvatar";
import DaftarSekarang from "@/components/home/DaftarSekarang";
import Tema from "@/components/home/Tema";
import Dokumentasi from "@/components/home/Dokumentasi";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Mencegah Inspect Element dan View Source
    const blockKeys = (event) => {
    if (
        (event.ctrlKey &&
        ["u", "i", "j", "s"].includes(event.key.toLowerCase())) ||
        (event.ctrlKey &&
        event.shiftKey &&
        ["i", "j", "c"].includes(event.key.toLowerCase())) ||
        event.key === "F12"
    ) {
        event.preventDefault();
        console.log("Inspect Element telah dinonaktifkan!");
    }
    };

    // Mencegah Klik Kanan
    const blockContextMenu = (event) => {
    event.preventDefault();
    };

    // Mencegah Drag & Drop
    const blockDragStart = (event) => {
    event.preventDefault();
    };

    // Mencegah Klik Kanan pada Semua Gambar
    const blockImgContext = () => {
    document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("contextmenu", blockContextMenu);
    });
    };

    document.addEventListener("keydown", blockKeys);
    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockDragStart);
    blockImgContext();

    // Cleanup agar tidak memory leak
    return () => {
    document.removeEventListener("keydown", blockKeys);
    document.removeEventListener("contextmenu", blockContextMenu);
    document.removeEventListener("dragstart", blockDragStart);
    document.querySelectorAll("img").forEach((img) => {
        img.removeEventListener("contextmenu", blockContextMenu);
    });
    };
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Rangkaian />
      <Timeline />
      <OurAvatar />
      <DaftarSekarang />
      <Tema />
      <Dokumentasi />
    </>
  );
}
