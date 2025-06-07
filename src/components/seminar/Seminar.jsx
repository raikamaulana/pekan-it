"use client"
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "../../app/globals.css";

export default function Seminar() {
    const router = useRouter();
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

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx6VljlO2rgYzIpquKt23j1_owdqBFLej1Ww6qD8etm6kNAiUvCGJUw1_8LqYSq_JqT/exec';
    const sheetDataURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSYPCJbwWseJ7W1owcOtzh7ryRwheFARmgsRLRtbkNzZUArMOMWvvymDxVW7DBdt08a4E2lb8j66EDH/pub?gid=509719385&single=true&output=csv';

    useEffect(() => {
        const form = document.forms['form-pendaftaran-seminar'];
        const submitButton = form?.querySelector('input[type="submit"]');

        const uploadFormData = (formData) => {
            const fileInputs = form.querySelectorAll('input[type="file"]');
            let filePromises = [];

            fileInputs.forEach(fileInput => {
                if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const reader = new FileReader();

                const promise = new Promise((resolve, reject) => {
                    reader.onloadend = () => {
                    resolve({
                        name: fileInput.name,
                        filename: file.name,
                        value: reader.result
                    });
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });

                filePromises.push(promise);
                }
            });

            Promise.all(filePromises)
                .then(files => {
                files.forEach(fileData => {
                    formData.append(fileData.name, fileData.value);
                    formData.append(fileData.name + '_filename', fileData.filename);
                });

                return fetch(scriptURL, {
                    method: 'POST',
                    body: formData,
                });
                })
                .then(response => response.json())
                .then(data => {
                if (data.result === 'success') {
                    alert("Terima kasih! Formulir Anda telah berhasil dikirim.");
                    const jenisKegiatan = 'seminar';
                    setTimeout(() => {
                    // window.location.href = `/Terimakasih?jenis=${encodeURIComponent(jenisKegiatan)}`;
                    router.push(`/terimakasih?jenis=${encodeURIComponent(jenisKegiatan)}`);
                    }, 100);
                    form.reset();
                } else if (data.result === 'duplicate') {
                    alert("Data duplikat. Mohon gunakan nama & nomor telepon yang berbeda.");
                } else {
                    throw new Error(data.error || "Kesalahan tidak diketahui dari server.");
                }
                })
                .catch(error => {
                alert("Gagal mengirim formulir. Error: " + error.message);
                })
                .finally(() => {
                submitButton.disabled = false;
                submitButton.value = "Kirim";
                });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            submitButton.disabled = true;
            submitButton.value = "Mengirim...";
            alert('Sedang memproses data dan mengunggah file...');

            const formData = new FormData(form);
            let isEmpty = false;

            const generalInputs = form.querySelectorAll('input:not([type="radio"]):not([type="file"]), textarea, select');
            generalInputs.forEach(input => {
                if (!input.value.trim()) {
                isEmpty = true;
                }
            });

            const radioGroups = new Set();
            form.querySelectorAll('input[type="radio"]').forEach(radio => {
                radioGroups.add(radio.name);
            });
            radioGroups.forEach(name => {
                const radios = form.querySelectorAll(`input[type="radio"][name="${name}"]`);
                const isChecked = Array.from(radios).some(r => r.checked);
                if (!isChecked) isEmpty = true;
            });

            const fileInputs = form.querySelectorAll('input[type="file"]');
            fileInputs.forEach(fileInput => {
                if (fileInput.files.length === 0) isEmpty = true;
            });

            if (isEmpty) {
                alert("Kamu wajib mengisi semua data yang ada.");
                submitButton.disabled = false;
                submitButton.value = "Kirim";
                return;
            }

            const nama = formData.get("nama")?.trim().toLowerCase();
            const noTelepon = formData.get("no_telepon")?.trim();

            if (!nama || !noTelepon) {
                alert("Nama lengkap dan nomor telepon wajib diisi.");
                submitButton.disabled = false;
                submitButton.value = "Kirim";
                return;
            }

            fetch(sheetDataURL)
                .then(response => {
                if (!response.ok) throw new Error("Gagal mengakses data spreadsheet.");
                return response.text();
                })
                .then(csvText => {
                const rows = csvText.split('\n').map(row => row.split(','));
                const header = rows[0];
                const namaIndex = header.indexOf("nama");
                const noTeleponIndex = header.indexOf("no_telepon");

                const isDuplicate = rows.some((row, i) => {
                    if (i === 0) return false;
                    const namaData = row[namaIndex]?.trim().toLowerCase();
                    const noTelpData = row[noTeleponIndex]?.trim();
                    return namaData === nama && noTelpData === noTelepon;
                });

                if (isDuplicate) {
                    alert("Data dengan nama dan nomor telepon ini sudah pernah dikirim.");
                    submitButton.disabled = false;
                    submitButton.value = "Kirim";
                    return;
                }

                uploadFormData(formData);
                })
                .catch(error => {
                alert("Gagal memeriksa duplikasi. Error: " + error.message);
                submitButton.disabled = false;
                submitButton.value = "Kirim";
                });
        };

        form?.addEventListener('submit', handleSubmit);
        return () => form?.removeEventListener('submit', handleSubmit);
    }, []);

    useEffect(() => {
        const setupFileUpload = (inputId, labelId, successId, changeBtnId) => {
        const input = document.getElementById(inputId);
        const label = document.getElementById(labelId);
        const successMsg = document.getElementById(successId);
        const changeBtn = document.getElementById(changeBtnId);

        if (!input || !label || !successMsg || !changeBtn) return;

        input.addEventListener("change", () => {
            if (input.files.length > 0) {
            label.style.display = "none";
            successMsg.style.display = "inline-block";
            changeBtn.style.display = "inline-block";
            }
        });

        changeBtn.addEventListener("click", () => {
            input.value = "";
            label.style.display = "inline-block";
            successMsg.style.display = "none";
            changeBtn.style.display = "none";
        });
        };

        setupFileUpload("bukti-grup", "upload-label-grup", "upload-success-grup", "change-file-button-grup");
        setupFileUpload("bukti-story", "upload-label-story", "upload-success-story", "change-file-button-story");
        setupFileUpload("payment_proof", "upload-label", "upload-success", "change-file-button");
    }, []);

    return (
        <>
            <div className="px-7 sm:px-16 lg:px-20 bg-mainBlack font-oxanium">
                {/* <!-- Form Wrapper --> */}
                <form id="form-pendaftaran-seminar" name="form-pendaftaran-seminar" action="" method="post" encType="multipart/form-data">
                    {/* <!-- Section 3: Data Diri --> */}
                    <section className="pb-40 sm:pb-45 lg:pb-50 pt-25 selection:bg-purple-900 selection:text-white transition-all duration-500">
                        <div className="relative z-1 text-center text-white font-oxanium font-semibold text-5xl lg:text-6xl xl:text-7xl transition-all duration-500">
                            <h1 className='shadow-text-2'>Isi Data Diri</h1>
                        </div>
                        <div className="flex justify-center mt-11 md:mt-13 lg:mt-15">
                            <div className="z-1 flex flex-col gap-6 sm:gap-7 lg:gap-8 w-full items-center max-w-[1000px] text-white">
                                <span className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
                                    <label htmlFor="Nama" className="text-lg sm:text-xl lg:text-2xl">Nama Lengkap</label>
                                    <input type="text" name="nama" id="Nama" required className='rounded-full w-full border-none bg-white text-black text-lg sm:text-xl lg:text-2xl font-medium px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4 placeholder:text-slate-300 hover:placeholder:text-slate-400 placeholder:italic focus:ring-3 md:focus:ring-4 focus:ring-[#BD63D1] focus:outline-none transition-all duration-300' />
                                </span>
                                <span className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
                                    <label htmlFor="Instansi" className="text-lg sm:text-xl lg:text-2xl">Asal Instansi :</label>
                                    <input type="text" name="instansi" id="Instansi" required className='rounded-full w-full border-none bg-white text-black text-lg sm:text-xl lg:text-2xl font-medium px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4 placeholder:text-slate-300 hover:placeholder:text-slate-400 placeholder:italic focus:ring-3 md:focus:ring-4 focus:ring-[#BD63D1] focus:outline-none transition-all duration-300' />
                                </span>
                                <span className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
                                    <label htmlFor="NoTelepon" className="text-lg sm:text-xl lg:text-2xl">No. WhatsApp :</label>
                                    <input type="text" name="no_telepon" id="NoTelepon" required className='rounded-full w-full border-none bg-white text-black text-lg sm:text-xl lg:text-2xl font-medium px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4 placeholder:text-slate-300 hover:placeholder:text-slate-400 placeholder:italic focus:ring-3 md:focus:ring-4 focus:ring-[#BD63D1] focus:outline-none transition-all duration-300' />
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section 4: Syarat --> */}
                    <section className="relative flex flex-col text-white text-center justify-center items-center selection:bg-purple-900 selection:text-white">
                        <div className="z-1 text-center text-white font-oxanium font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-[800px] mb-10 sm:mb-15 lg:mb-20 transition-all duration-500">
                            <h1 className='shadow-text-2'>Syarat Mengikuti Seminar</h1>
                        </div>
                        <div className="flex flex-col items-center gap-15 md:gap-17 lg:gap-20 w-full z-1 transition-all duration-500">
                            <span className="w-full flex flex-col items-center gap-5 md:gap-8 lg:gap-10">
                                <label htmlFor="bukti-grup" className="text-xl lg:text-3xl xl:text-4xl">Upload Bukti Share Pamflet ke 2 Grup Whatsapp :</label>
                                <input type="file" id="bukti-grup" name="bukti_grup" accept=".jpg,.jpeg,.png,.pdf" style={{display: "none"}} required />
                                <div className="flex justify-center items-center gap-4 flex-wrap">
                                    <label htmlFor="bukti-grup" className="group text-2xl max-w-[300px] min-w-[300px] sm:max-w-[350px] sm:min-w-[350px] flex justify-center items-center gap-5 px-5 py-2 md:max-w-[500px] md:min-w-[500px] rounded-4xl bg-white outline-2 outline-[#707070] hover:outline-white hover:bg-[#707070] hover:text-[#efefef] text-black md:text-4xl font-medium cursor-pointer transition-all duration-300 ease-in-out" id="upload-label-grup">
                                        <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] fill-current'>
                                            <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                                        </svg>
                                        Pilih File
                                    </label>
                                    <span id="upload-success-grup" className="ml-4 text-2xl text-green-500 font-semibold" style={{display: "none"}}>
                                        ✅ Berhasil diunggah!
                                    </span>
                                    <button type="button" id="change-file-button-grup" className="rounded-3xl px-4 py-2 border-none bg-[#707070] hover:bg-[#505050] text-white cursor-pointer transition-colors duration-300" style={{display: "none"}}>
                                        Ganti File
                                    </button>
                                </div>
                            </span>
                            <span className="w-full flex flex-col items-center gap-5 md:gap-8 lg:gap-10">
                                <label htmlFor="bukti-story" className="text-xl lg:text-3xl xl:text-4xl">Upload Bukti Share Pamflet ke Instagram Story :</label>
                                <input type="file" id="bukti-story" name="bukti_story" accept=".jpg,.jpeg,.png,.pdf" style={{display: "none"}} required />
                                <div className="flex justify-center items-center gap-4 flex-wrap">
                                    <label htmlFor="bukti-story" className="group text-2xl max-w-[300px] min-w-[300px] sm:max-w-[350px] sm:min-w-[350px] flex justify-center items-center gap-5 px-5 py-2 md:max-w-[500px] md:min-w-[500px] rounded-4xl bg-white outline-2 outline-[#707070] hover:outline-white hover:bg-[#707070] hover:text-[#efefef] text-black md:text-4xl font-medium cursor-pointer transition-all duration-300 ease-in-out" id="upload-label-story">
                                        <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] fill-current'>
                                            <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                                        </svg>
                                        Pilih File
                                    </label>
                                    <span id="upload-success-story" className="upload-success" style={{display: "none"}}>
                                        ✅ Berhasil diunggah!
                                    </span>
                                    <button type="button" id="change-file-button-story" className="change-file-btn" style={{display: "none"}}>
                                        Ganti File
                                    </button>
                                </div>
                            </span>
                        </div>
                    </section>

                    {/* <!-- Section 5: Pembayaran --> */}
                    <section className="mt-35 md:mt-40 xl:mt-45 relative flex flex-col text-white text-center justify-center items-center selection:bg-purple-900 selection:text-white">
                        <div className="absolute hidden md:block top-0 -right-20 w-[1px] h-[1px] rounded-full shadow-purple-glow z-0"></div>
                        <div className="absolute md:hidden -top-10 right-0 w-[1px] h-[1px] rounded-full shadow-purple-glow-mob-2"></div>
                        <div className="absolute hidden md:block top-65 left-30 w-[1px] h-[1px] rounded-full shadow-green-glow"></div>
                        <div className="absolute md:hidden top-40 left-0 w-[1px] h-[1px] rounded-full shadow-green-glow-mob-2"></div>
                        <div className="relative z-1 text-center text-white font-oxanium font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-[800px] mb-10 sm:mb-15 lg:mb-20 transition-all duration-500">
                            <h1 className='shadow-text-2'>Metode Pembayaran</h1>
                        </div>
                        <div className="w-full max-w-[80%] sm:max-w-[70%] md:max-w-[850px] mx-auto gap-10 md:gap-[55px] lg:gap-[70px] grid grid-cols-1 md:grid-cols-2">
                            <label className="radio-card py-8 border-2 border-black rounded-[60px] bg-black select-none cursor-pointer z-1">
                                <input type="radio" name="payment_method" value="dana" />
                                <img src="/logo/dana.png" className='w-fit mx-auto h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] mb-5 transition-all duration-500' alt="Dana" />
                                <span className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center text-white">Dana</span>
                            </label>
                            <label className="radio-card py-8 border-2 border-black rounded-[60px] bg-black select-none cursor-pointer z-1">
                                <input type="radio" name="payment_method" value="seabank" />
                                <img src="/logo/seabank.png" className='w-fit mx-auto h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] mb-5 transition-all duration-500' alt="Seabank" />
                                <span className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center text-white">Seabank</span>
                            </label>
                        </div>
                        <div className="mt-12 text-base sm:text-lg md:text-xl lg:text-2xl md:font-medium text-center">
                            <p className="p-1">DANA : 085813549224 a.n Atika Sari Ramadhani</p>
                            <p className="p-1">SEABANK: 901043234643 a.n Atika Sari R.</p>
                        </div>
                        <div className="w-full flex flex-col items-center gap-12 mt-12 z-1 max-w-[300px] sm:max-w-[350px] md:max-w-[500px]">
                            <span className="w-full flex flex-col items-center gap-5 md:gap-8 lg:gap-10">
                                <label htmlFor="payment_proof" className="text-2xl lg:text-3xl xl:text-4xl">Upload Bukti Pembayaran :</label>
                                <input type="file" id="payment_proof" name="payment_proof" style={{display: "none"}} />
                                <div id="upload-wrapper" className="flex justify-center items-center gap-4 flex-wrap">
                                    <label htmlFor="payment_proof" className="group text-2xl max-w-[300px] min-w-[300px] sm:max-w-[350px] sm:min-w-[350px] flex justify-center items-center gap-5 px-5 py-2 md:max-w-[500px] md:min-w-[500px] rounded-4xl bg-white outline-2 outline-[#707070] hover:outline-white hover:bg-[#707070] hover:text-[#efefef] text-black md:text-4xl font-medium cursor-pointer transition-all duration-300 ease-in-out" id="upload-label">
                                        <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] fill-current'>
                                            <path d="M60.7327 73.4824L55.2502 79.0074V55.2499C55.2502 54.1228 54.8024 53.0418 54.0054 52.2447C53.2084 51.4477 52.1274 50.9999 51.0002 50.9999C49.873 50.9999 48.792 51.4477 47.995 52.2447C47.198 53.0418 46.7502 54.1228 46.7502 55.2499V79.0074L41.2677 73.4824C40.8714 73.0862 40.401 72.7718 39.8833 72.5574C39.3655 72.3429 38.8106 72.2325 38.2502 72.2325C37.6898 72.2325 37.1349 72.3429 36.6171 72.5574C36.0994 72.7718 35.629 73.0862 35.2327 73.4824C34.8364 73.8787 34.5221 74.3491 34.3076 74.8669C34.0932 75.3846 33.9828 75.9395 33.9828 76.4999C33.9828 77.0603 34.0932 77.6152 34.3076 78.133C34.5221 78.6507 34.8364 79.1212 35.2327 79.5174L47.9827 92.2674C48.3869 92.6544 48.8635 92.9577 49.3852 93.1599C49.8939 93.3848 50.444 93.5009 51.0002 93.5009C51.5564 93.5009 52.1065 93.3848 52.6152 93.1599C53.1369 92.9577 53.6135 92.6544 54.0177 92.2674L66.7677 79.5174C67.568 78.7171 68.0176 77.6317 68.0176 76.4999C68.0176 75.3681 67.568 74.2827 66.7677 73.4824C65.9674 72.6821 64.882 72.2325 63.7502 72.2325C62.6184 72.2325 61.533 72.6821 60.7327 73.4824ZM78.2852 26.4349C75.6884 20.4679 71.2068 15.517 65.527 12.3408C59.8472 9.16452 53.2827 7.93821 46.8393 8.84973C40.3959 9.76126 34.4291 12.7603 29.8533 17.3874C25.2774 22.0145 22.345 28.0143 21.5052 34.4674C17.4532 35.4378 13.8986 37.8625 11.5166 41.281C9.13453 44.6995 8.09086 48.8738 8.58378 53.0111C9.07669 57.1484 11.0719 60.9606 14.1904 63.7238C17.3089 66.487 21.3336 68.0087 25.5002 67.9999C26.6274 67.9999 27.7084 67.5522 28.5054 66.7551C29.3024 65.9581 29.7502 64.8771 29.7502 63.7499C29.7502 62.6228 29.3024 61.5418 28.5054 60.7447C27.7084 59.9477 26.6274 59.4999 25.5002 59.4999C23.2459 59.4999 21.0839 58.6044 19.4898 57.0103C17.8957 55.4163 17.0002 53.2543 17.0002 50.9999C17.0002 48.7456 17.8957 46.5836 19.4898 44.9895C21.0839 43.3955 23.2459 42.4999 25.5002 42.4999C26.6274 42.4999 27.7084 42.0522 28.5054 41.2551C29.3024 40.4581 29.7502 39.3771 29.7502 38.2499C29.7611 33.2234 31.5534 28.3634 34.8088 24.5334C38.0643 20.7034 42.572 18.1515 47.5311 17.3309C52.4903 16.5103 57.5798 17.4742 61.8954 20.0515C66.211 22.6287 69.4733 26.6523 71.1027 31.4074C71.3456 32.1377 71.7823 32.7884 72.3662 33.2899C72.95 33.7914 73.6591 34.1249 74.4177 34.2549C77.2485 34.7899 79.8147 36.2677 81.6981 38.4477C83.5815 40.6277 84.6711 43.3812 84.7894 46.2596C84.9077 49.1381 84.0477 51.9718 82.3495 54.2989C80.6513 56.6261 78.215 58.3095 75.4377 59.0749C74.8963 59.2145 74.3877 59.4593 73.941 59.7953C73.4942 60.1314 73.118 60.5522 72.8338 61.0337C72.5497 61.5151 72.3632 62.0479 72.2849 62.6014C72.2066 63.155 72.2382 63.7186 72.3777 64.2599C72.5172 64.8013 72.762 65.3099 73.0981 65.7567C73.4342 66.2034 73.855 66.5796 74.3364 66.8638C74.8179 67.1479 75.3506 67.3345 75.9042 67.4127C76.4578 67.491 77.0213 67.4595 77.5627 67.3199C82.0353 66.1381 86.0001 63.5289 88.855 59.8887C91.7098 56.2484 93.2988 51.776 93.3805 47.1506C93.4622 42.5251 92.0323 37.9994 89.3079 34.2605C86.5834 30.5217 82.7133 27.7741 78.2852 26.4349Z" />
                                        </svg>
                                        Pilih File
                                    </label>
                                    <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5'>
                                        <span id="upload-success" className="ml-4 text-2xl text-green-500 font-semibold" style={{display: "none"}}>
                                            ✅ Berhasil diunggah!
                                        </span>
                                        <button type="button" id="change-file-button" className="rounded-3xl px-4 py-2 border-none bg-[#707070] hover:bg-[#505050] text-white cursor-pointer transition-colors duration-300" style={{display: "none"}}>
                                            Ganti File
                                        </button>
                                    </div>
                                </div>
                            </span>
                            <div className="flex flex-col md:flex-row items-center gap-4 justify-center w-full md:mt-8 mb-30 sm:mb-35 lg:mb-40 transition-all duration-500">
                                <input className="w-full min-w-[300px] text-xl md:min-w-[140px] py-2 px-8 sm:py-4 sm:px-20 md:px-4 md:py-3 border-none rounded-[48px] md:text-2xl font-medium decoration-0 cursor-pointer flex items-center justify-center transition-all duration-300 bg-linear-135/oklch from-[#a64bff] to-[#4b0082] text-white box-shadow-purple outline-2 outline-[#a64bff] hover:outline-2 hover:outline-white hover:text-white" type="submit" value="Kirim" />
                                <button type="button" className="w-full min-w-[300px] text-xl md:min-w-[140px] py-2 px-8 sm:py-4 sm:px-20 md:px-4 md:py-3 border-none rounded-[48px] md:text-2xl font-medium decoration-0 cursor-pointer flex items-center justify-center transition-all duration-300 bg-white outline-2 outline-[#707070] hover:outline-white hover:bg-[#707070] hover:text-[#efefef] text-black box-shdow-purple hover:outline-2">Kembali</button>
                            </div>
                        </div>
                    </section>
                </form>
                {/* <!-- End of Form --> */}
            </div>
        </>
    )
}
