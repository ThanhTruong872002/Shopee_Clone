/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorsMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

export default function Input({ type, errorsMessage, placeholder, className, name, register, rules, autoComplete }: Props) {
  return (
    <div>
      <div className={className}>
        <input
          placeholder={placeholder}
          type={type}
          autoComplete={autoComplete}
          className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
          {...register(name, rules)}
        />
        <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errorsMessage}</div>
      </div>
    </div>
  )
}
