import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5-160 kí tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 6-160 kí tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 6-160 kí tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password chưa đúng'
        : undefined
  }
})
