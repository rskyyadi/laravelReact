import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children, typeLogin }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>{
                !typeLogin &&
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            }</div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
