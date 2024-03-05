/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorsMessage?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  classNameInput?: string
  classNameError?: string
}

export default function Input({
  type,
  errorsMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  autoComplete,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]'
}: Props) {
  const regiterResult = register && name ? register(name, rules) : null
  return (
    <div>
      <div className={className}>
        <input
          placeholder={placeholder}
          type={type}
          autoComplete={autoComplete}
          className={classNameInput}
          {...regiterResult}
        />
        <div className={classNameError}>{errorsMessage}</div>
      </div>
    </div>
  )
}
