
export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#000300]">

            <div className="w-full backdrop-blur-md sm:max-w-md mt-6 px-6 py-4 bg-white/25 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
