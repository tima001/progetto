import React from 'react'
import { toast } from 'react-toastify'
import { useIntl } from 'react-intl'

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const history = require('history').createBrowserHistory()
export const thousandSeparators = (number) => {
    if (!(number - 1) || number < 1000) {
        return number
    }
    const str = number?.toString()?.split('')?.reverse()

    for (let i = 0; i < str?.length; i++) {
        if ((i + 1) % 3 === 0 && i + 1 !== str?.length) {
            str[i] = ',' + str[i]
        }
    }
    const tempNum = str?.reverse()?.join('')
    if (!tempNum?.length) {
        return number
    }
    return tempNum[0] === '-' && tempNum[1] === ','
        ? '-' + tempNum?.split('')?.splice(2)?.join('')
        : tempNum
}

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const toTitleCase = (s) => {
    if (typeof s !== 'string') return ''
    return s.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

// export const displayErrorNotification = (error, formik) => {
//     const errList = {}
//     if (error.response) {
//         error?.response?.data?.errors.forEach((err) => {
//             errList[err.field] = err.message
//             console.log(err.code)
//             toast.error(
//                 // eslint-disable-next-line react/react-in-jsx-scope
//                 <FormattedMessage
//                     id={err.code}
//                     defaultMessage={err.message}
//                 ></FormattedMessage>,
//             )
//         })
//     } else if (error.request) {
//         toast.error(error.request)
//     } else {
//         // Something happened in setting up the request and triggered an Error
//         toast.error(error.message)
//     }

//     if (formik) {
//         formik.setErrors(errList)
//     }
// }

export const convertToDOMObject = (html) =>
    new DOMParser().parseFromString(html, 'text/html').body.childNodes[0]

export const assignObjectPaths = (obj, stack) => {
    const isArray = Array.isArray(obj)
    Object.keys(obj).forEach((k) => {
        const node = obj[k]
        const key = isArray ? `[${k}]` : k

        if (node && typeof node === 'object') {
            node.path = stack ? `${stack}.${key}` : key
            assignObjectPaths(node, node.path)
        }
    })
    return obj
}

export const assignObjectSelectedNodes = (obj, idList) => {
    Object.keys(obj).forEach((k) => {
        const node = obj[k]
        if (idList.includes(node?.studentId) && node?.selected === false) {
            node.checked = true
            node.selected = true
        }
        if (node && typeof node === 'object') {
            assignObjectSelectedNodes(node, idList)
        }
    })
    return obj
}

export const removeDuplicateNumbers = (arr: Array<number>) => {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

// export const showErrors = (error) => {
//     const { formatMessage } = useIntl()

//     return error?.response?.data?.errors?.forEach((err) => {
//         toast.error(
//             err.code
//                 ? formatMessage({
//                       id: err.code,
//                       defaultMessage: err?.message,
//                   })
//                 : err.message,
//         )
//     })
// }

export const convertToMobile = (mobile: string) => {
    const mobileNumbers = mobile.replace(/\D/g, '').substring(1)

    return mobileNumbers
}

export const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0')
}

export const toMinutesAndSeconds = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const finalTime = `${padTo2Digits(minutes)} : ${padTo2Digits(seconds)}`

    return finalTime
}

export const formatDateToCalendarDate = (date: Date) => {
    const newDate = new Date(date)

    const year = newDate.getFullYear()
    const month = padTo2Digits(newDate.getMonth() + 1)
    const day = padTo2Digits(newDate.getDate())

    return [day, month, year].join('.')
}

export const calculateNumberFromPercentage = (total, percentage) => {
    const discount = (total * percentage) / 100

    return total - discount
}
