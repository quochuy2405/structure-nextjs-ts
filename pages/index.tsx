import type { NextPage } from '@/types/next'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { schema } from './resolver'

const Home: NextPage = () => {
  const storeState = useForm()
  const methods = useForm({
    resolver: yupResolver(schema)
  })

  const handleSubmit = (data: any) => {
    console.log(data)
    storeState.setValue('sending', true)
    setTimeout(() => {
      storeState.setValue('sending', false)
    }, 2000)
  }
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-sm mx-auto">
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <h2 className="font-semibold text-xl text-gray-600 text-center">Add User Form</h2>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1">
                <div className="lg:col-span-2">
                  <div className="flex flex-col gap-4 gap-y-2 text-sm">
                    {/* ?----? */}

                    <Controller
                      defaultValue=""
                      name="fullName"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <div className="md:col-span-5">
                          {/* --- */}
                          <label htmlFor="full_name">Full Name</label>
                          <input type="text" {...field} className="h-9 border mt-1 rounded px-4 w-full bg-gray-50" />
                          <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                        </div>
                      )}
                    />

                    {/* ?----? */}
                    <div className="flex justify-between w-full gap-4 ">
                      <Controller
                        defaultValue=""
                        name="email"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <div className="md:col-span-5 flex-1 w-full">
                            {/* --- */}
                            <label htmlFor="email">Email</label>
                            <input type="text" {...field} className="h-9 border mt-1 rounded px-4 w-full bg-gray-50" />
                            <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                          </div>
                        )}
                      />

                      <Controller
                        defaultValue=""
                        name="phone"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <div className="md:col-span-5 flex-1 w-full">
                            {/* --- */}
                            <label htmlFor="Phone">Phone</label>
                            <input type="text" {...field} className="h-9 border mt-1 rounded px-4 w-full bg-gray-50" />
                            <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                          </div>
                        )}
                      />
                    </div>

                    <Controller
                      defaultValue=""
                      name="role"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <div className="md:col-span-5">
                          <label htmlFor="role">Role</label>
                          <select
                            id="role"
                            {...field}
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                        </div>
                      )}
                    />
                    <div className="flex justify-between w-full gap-4 ">
                      <Controller
                        defaultValue=""
                        name="province"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <div className="md:col-span-5 flex-1 w-full">
                            <label htmlFor="province">Province</label>
                            <select
                              id="province"
                              {...field}
                              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option>Choose a country</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                          </div>
                        )}
                      />
                      <Controller
                        defaultValue=""
                        name="areaInCharge"
                        control={methods.control}
                        render={({ field, fieldState }) => (
                          <div className="md:col-span-5 flex-1 w-full">
                            <label htmlFor="areaInCharge">Area In Charge</label>
                            <select
                              id="areaInCharge"
                              {...field}
                              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option>Choose a country</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                          </div>
                        )}
                      />
                    </div>

                    <Controller
                      defaultValue=""
                      name="username"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <div className="md:col-span-5">
                          {/* --- */}
                          <label htmlFor="Username">Username</label>
                          <input type="text" {...field} className="h-9 border mt-1 rounded px-4 w-full bg-gray-50" />
                          <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                        </div>
                      )}
                    />

                    <Controller
                      defaultValue=""
                      name="password"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <div className="md:col-span-5">
                          {/* --- */}
                          <label htmlFor="password">Password</label>
                          <input type="text" {...field} className="h-9 border mt-1 rounded px-4 w-full bg-gray-50" />
                          <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                        </div>
                      )}
                    />

                    <Controller
                      defaultValue=""
                      name="confirmPassword"
                      control={methods.control}
                      render={({ field, fieldState }) => (
                        <div className="md:col-span-5">
                          {/* --- */}
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input type="text" {...field} className="h-9 border mt-1 rounded px-4 w-full bg-gray-50" />
                          <p className="text-red-500 text-xs">{fieldState.error?.message}</p>
                        </div>
                      )}
                    />

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          disabled={storeState.watch('sending')}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-80"
                          type="submit"
                        >
                          {storeState.watch('sending') ? 'Đang gửi' : 'Submit'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* --- */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
