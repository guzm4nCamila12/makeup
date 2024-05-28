import React from 'react'
import { useIdleTimer } from 'react-idle-timer'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

const timeout = 10000

export default function SesionExpired() {
    const cookies = new Cookies()

    const onIdle = () => {
        cookies.remove('email', { path: "/" })
        window.location.hash = '/'
        Swal.fire({
            title: "La sesión expiró por inactividad. Inicie sesión de nuevo.",
            icon: "info"
        })
    }

    const getRemainingTime = useIdleTimer ({
        onIdle,
        timeout,
        throttle: 500
    })

    console.log(getRemainingTime)

    return (
        <div>
        </div>
    )
}
