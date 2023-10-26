import { deleteCookie, getCookie } from 'cookies-next';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const setCookie = (name, value, days) => {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (12 * 60 * 60 * 1000));
    expires = "; path=/; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export const eraseCookie = (name) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export const Swallalert = (condition, e, html) => {
    switch (condition) {
        case 'error':
            return Swal.fire({
                text: e?.status === 422 ? typeof e === 'object' ? e.data.message === '' ? 'Sistem error' : e.data.message : "Process error" : "Process error",
                imageUrl: '/static/icons/icon-alert/error.png',
                showConfirmButton: false,
                showCancelButton:true,
                cancelButtonText: 'Close',
                allowOutsideClick: false,
            })
        case 'warning':
            return Swal.fire({
                text: e.message,
                imageUrl: '/static/icons/icon-alert/warning.png',
                showConfirmButton: true,
                confirmButtonText: 'Ya',
                showCancelButton:true,
                cancelButtonText: 'Tidak',
                allowOutsideClick: false,
                customClass: {
                    confirmButton:'delete',
                    cancelButton:'delete'
                }
            })
        case 'success':
            return Swal.fire({
                text: e.message,
                imageUrl: '/static/icons/icon-alert/success.jpg',
                showConfirmButton: true,
                confirmButtonText: 'Close',
                allowOutsideClick: false,
            })
        case 'loading':
            return Swal.fire({
                text: e.message,
                imageUrl: '/static/icons/icon-alert/warning.png',
                showConfirmButton: false,
                confirmButtonText: false,
                allowOutsideClick: false,
                showCancelButton:true,
                cancelButtonText: 'Batal',
            })
    }
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const token = getCookie('access_token');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                let root = document.documentElement;
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
                root.style.setProperty('--screen-y', window.innerHeight + 'px')
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}
