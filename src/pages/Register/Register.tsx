import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onsubmit = handleSubmit(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (data) => {
      // console.log(data)
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl max-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10 py-12'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onsubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  placeholder='Email'
                  type='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  {...register('email', rules.email)}
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errors.email?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  placeholder='Password'
                  type='password'
                  autoComplete='on'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  {...register('password', rules.password)}
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errors.password?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  placeholder='Confirm Password'
                  type='password'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  {...register('confirm_password', { ...rules.confirm_password })}
                />
                <div className='mt-1 text-red-600 text-sm min-h-[1.25rem]'>{errors.confirm_password?.message}</div>
              </div>
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex item-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản ?</span>
                <Link className='text-red-400 ml-2' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
