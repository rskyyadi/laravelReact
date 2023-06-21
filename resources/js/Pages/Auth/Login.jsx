import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import ActionButton from '@/Components/ActionButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { IoArrowBackOutline } from 'react-icons/io5'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({ email: '', password: '', remember: '' });
    const [showPass, setShowPass] = useState(false);

    useEffect(() => { return () => {reset('password')} }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    // Layout
    const canResetPasswordClass = "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
    const LoginWithGoogleBtn = () => (
        <a href={route('google.login')}>
            <PrimaryButton 
                className="mt-4 w-full bg-red" 
                disabled={processing}>
                <div className='ml-auto mr-auto flex items-center'>
                    <AiFillGoogleCircle className='mr-3 h-4 w-4' />
                    Login with google
                </div>
            </PrimaryButton>
        </a>
    )
    const LoginWithFacebookBtn = () => (
        <a href={route('facebook.login')}>
            <ActionButton 
                className="w-full"
                disabled={processing}
                background='bg-blue-800'
                bgOnDark='bg-blue-700'
                textColor='text-white'
                textOnDark='text-white'
                bgHover='bg-blue-700'
                onDarkHover='bg-blue-700'
                onFocus='bg-blue-700'
                onDarkFocus='bg-blue-300'
                onActive='bg-blue-900'
                onActiveDark='bg-blue-300'
                onDarkFocusRing='ring-offset-blue-800'
                border
                borderColor='border-slate-700'
            >
                <div className='ml-auto mr-auto flex items-center'>
                    <FaFacebookSquare className='mr-3 h-4 w-4' />
                    Login with facebook
                </div>
            </ActionButton>
        </a>
    )
    const LoginButton = () => (
        <ActionButton 
            className="mt-5 w-full" 
            disabled={processing}
            background='bg-amber-600'
            bgOnDark='bg-amber-950'
            textColor='text-white'
            textOnDark='text-white'
            bgHover='bg-amber-700'
            onDarkHover='bg-blue-700'
            onFocus='bg-amber-700'
            onDarkFocus='bg-white'
            onActive='bg-amber-900'
            onActiveDark='bg-amber-300'
            onDarkFocusRing='ring-offset-amber-800'
        >
            <div className='ml-auto mr-auto'>Log in</div>
        </ActionButton>
    )
    // const BackButton = ({ className }) => (
    //     <a href={route('welcome')}>
    //         <IoArrowBackOutline className={className} />
    //     </a>
    // )
    const TextSpace = ({ type, text }) => (
        type === 'header'
        ? <div className='text-white text-center mt-3 mb-5 font-semibold text-xl animate__animated animate__fadeInUp animate__duration-1.3s animate__delay-0.2s'>{text}</div>
        : type === 'span'
        ? <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{text}</span>
        : <div className='text-white text-center mt-3 mb-3 font-semibold text-sm'>{text}</div>
    )
    const SvgIcon = ({ className, style }) => (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920.183 1075.636">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#361cc1"/>
                    <stop offset="1" stop-color="#2e82ef"/>
                </linearGradient>
                <clipPath id="clip-path">
                    <path id="Path_199" data-name="Path 199" d="M-533.031,278.516s95.269,204.193,401.21,161.147,419.656-32.1,544.188,96.892,343.977,107.54,572.909,67.066,360.19,68.158,401.79,142.968c.041-2.4-.074-1075.621-.074-1075.621l-1920,.011Z" transform="translate(533 329)" fill="url(#linear-gradient)"/>
                </clipPath>
            </defs>
            <g id="Group_112" data-name="Group 112" transform="translate(0.089 0.042)">
                <path id="Path_195" data-name="Path 195" d="M-533.089,278.364s100.43,239.944,401.206,191.477,442.068,9.577,537.63,114.941,352.091,94.329,580.987,52.374S1349.9,678.95,1387.094,746.594c.016.016-.373-1075.609-.373-1075.609l-1919.766-.027Z" transform="translate(533 329)" opacity="0.11" fill="url(#linear-gradient)"/>
                <path id="Path_194" data-name="Path 194" d="M-533.031,278.516s95.269,204.193,401.21,161.147,419.656-32.1,544.188,96.892,343.977,107.54,572.909,67.066,360.19,68.158,401.79,142.968c.041-2.4-.074-1075.621-.074-1075.621l-1920,.011Z" transform="translate(533 329)" fill="url(#linear-gradient)"/>
                <g id="Mask_Group_6" data-name="Mask Group 6" clip-path="url(#clip-path)">
                <path id="Path_4" data-name="Path 4" d="M-496.368,321.285S-322.126-70.761,321.065,66.253s869.415,77.467,1056.161-463.982" transform="translate(522 366.416)" fill="none" stroke="#361cc1" stroke-width="128" opacity="0.14"/>
            </g>
            </g>
        </svg>
    )

    return (
        <>
        {/* <BackButton className='z-50 text-white absolute text-3xl' /> */}
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <SvgIcon className='w-full h-full mt-[-350px]' />
            <div className="w-full sm:max-w-md px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg z-10 absolute">
                <Head title="Log in" />
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                <form onSubmit={submit}>
                    <TextSpace type="header" text="Account Login" />
                    <div>
                        <InputLabel htmlFor="email" value="Username" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            action='email'
                            placeholder="your-email@gmail.com"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={handleOnChange}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type={showPass ? "text" : "password"}
                            name="password"
                            action='password'
                            placeholder="your password"
                            passwordType
                            showPass={showPass}
                            setShowPass={setShowPass}
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div className="block mt-4 flex justify-between">
                        <label className="flex items-center">
                            <Checkbox name="remember" value={data.remember} onChange={handleOnChange} />
                            <TextSpace type="span" text="Remember me" />
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className={canResetPasswordClass}>
                                Forgot Password
                            </Link>
                        )}
                    </div>
                    <LoginButton />
                </form>
                <div className='mb-5'>
                    <TextSpace text="Or login with" />
                    <LoginWithFacebookBtn />
                    <LoginWithGoogleBtn />
                </div>
            </div>
        </div>
        </>
    );
}
