import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

export const notyf = new Notyf({
    duration: 3000,
    ripple: false,
    position: {
        x: 'right',
        y: 'bottom',
    },
})
