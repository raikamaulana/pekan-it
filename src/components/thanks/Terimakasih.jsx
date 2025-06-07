"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import "../../app/globals.css";

export default function Terimakasih() {
    const router = useRouter();
    const [waLink, setWaLink] = useState("#");

    useEffect(() => {
        // Ambil query param dari URL
        const searchParams = new URLSearchParams(window.location.search);
        const jenis = searchParams.get("jenis")?.toLowerCase();

        // Mapping jenis kegiatan ke link grup WA
        const linkWA = {
        cp: "https://chat.whatsapp.com/DVPy7LsZkOE0TkXQGxEG5y",
        uiux: "https://chat.whatsapp.com/FWaAH98K5DxBPh24bvdQjl",
        softdev: "https://chat.whatsapp.com/IHi739y7m8xLO6KH99RwHY",
        webinar: "https://chat.whatsapp.com/C3VK2U07e0f7xr3WqE5gbd",
        seminar: "https://chat.whatsapp.com/JJk2Oc7lRmuIgeq8b1QkzG",
        };

        if (jenis && linkWA[jenis]) {
        setWaLink(linkWA[jenis]);
        // Hilangkan query string dari URL
        setTimeout(() => {
            window.history.replaceState({}, "", "/terimakasih");
        }, 200); // kasih jeda 200ms
        } else {
        alert("Kamu belum mengisi pendaftaran manapun.");
        setWaLink("#");
        }
    }, []);

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            document.body.classList.add('page-loaded');
            setTimeout(() => {
            preloader.style.transition = 'opacity 0.3s ease';
            preloader.style.opacity = 0;
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
            }, 1000);
        }
    }, []);

    return (
        <>
            <div className="page-wrapper">

        {/* <!-- Start Hero Section --> */}
        <section className="hero-section-thanks">
            <div className="hero-title">
                <h1>Terima Kasih Sudah Mendaftar!</h1>
                <p>Silahkan bergabung dengan grup WhatsApp berikut untuk info lebih lanjut. Semangat!</p>
            </div> 
            <a id="wa-button" href={waLink} target='_blank'>
                <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Klik Disini!</span>
                </button>
            </a>
        </section>
        {/* <!-- End Hero Section --> */}
        
        
        {/* <!-- Start Thanks Section --> */}
        <section className="thanks-section">
            <img className="elipse1" src="/icons/ellipse-1.png" alt="Elipse 1" />
            <img className="elipse2" src="/icons/ellipse-2.png" alt="Elipse 2" />
            <div className="thanks-title">
                <h2>Express Your <span>Spirit!</span></h2>
                <p>Ekspresikan antusiasmu dengan pakai dan unggah twibbon ke Instagram! Twibbon bisa diakses pada tombol di bawah.</p>
            </div> 
            <div className="thanks-buttons">     
                <button className="btn"><a href="https://twibbo.nz/twibbonpekanit2025" target="_blank">Klik Disini!</a></button>               
            <button className="btn-1" onClick={() => router.push("/")}>Kembali</button>
            </div>
        </section>
        {/* <!-- End Thanks Section --> */}

    </div>
        </>
    )
}
