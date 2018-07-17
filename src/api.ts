import { of } from 'rxjs/index'
import { ajax } from 'rxjs/ajax'
import { SlotBookPost } from 'data/slots/types'

const API_ROOT = 'https://draliatest.azurewebsites.net/api/'

export const STORE_API_KEY = 'apiKey'

const http = (method: string, url: string, data?: object) =>
    ajax({
        url: `${API_ROOT}${url}`,
        method,
        body: JSON.stringify(data),
        headers: {
            ApiKey: localStorage.getItem(STORE_API_KEY),
            'Content-Type': 'application/json'
        }
    })

// fake user responses
export const user = {
    auth: (data: { email: string; password: string }) =>
        of({ apiKey: process.env.REACT_APP_API_KEY! }),
    get: () => of({ id: 1, email: localStorage.getItem('email')! })
}

export const slots = {
    get: (datetime: string) =>
        http('get', `availability/GetWeeklySlots/${datetime}`),

    postBook: (slot: SlotBookPost) =>
        http('post', `availability/BookSlot`, slot)
}
