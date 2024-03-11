import React from 'react';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className='snap-y'>
            <div className='flex flex-row justify-between items-center mt-20 snap-center h-full'>
                <div className='mx-20'>
                    <h1 className='text-6xl font-bold mb-2'>Welcome to <br /> Namma Oor Kadai</h1>
                    <p className='text-slate-700 mb-4'>Your one-stop shop for the latest smartphones</p>
                    <a href={'/products'} className='mt-2 border-text-md rounded-lg text-blue-500 border-solid border-2 p-1 border-sky-500
                 font-semibold hover:text-white hover:bg-sky-500 text-center'>Browse Products</a>
                    <p className='mt-4 text-gray-500'>Free Shipping on all orders.</p>
                </div>
                <div className=''>
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216037925373087774/New_Project.png?ex=65feee92&is=65ec7992&hm=19b6e19ed11af698b06efa4c298ebed06abf5fef4b7414b31d9c4f6258c3baa8&' alt='s23image' id='heroImage' />

                </div>
            </div>
            <div className='snap-center mt-20 text-center h-48'>
                <h3 className='text-4xl'>Our Top Brands</h3>
                <p className='text-xl text-gray-500 mt-4'>We offer smartphones from the world's leading brands</p>
                <div className='flex flex-row justify-center items-center mt-8'>
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208051837730836/samsung.png?ex=65ff8d03&is=65ed1803&hm=7ea4b700440487b5140094a0c4027c46339c840c70db3cd145102fc58f0702e9&' alt='logo' className='w-20 me-10' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208048675225630/apple-logo.png?ex=65ff8d02&is=65ed1802&hm=f2a8ef695024c71afc7d7584c7cc3cb845659c2b623179cd5eaf119f6eae5d52&' alt='logo' className='w-14 h-14 me-10' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208049631531048/huawei.png?ex=65ff8d03&is=65ed1803&hm=17e3cbe945289829024fdadb024af9427d98c3b80efcded206b79f5457955006&' alt='logo' className='w-16 h-14 me-10' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208052093587517/sony.png?ex=65ff8d03&is=65ed1803&hm=98903844be308fbc1a57bbcef3a69b92624cbf12ae5df9d63a25f6e446aed2ff&' alt='logo' className='w-16 me-10' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208050554409040/motorola.png?ex=65ff8d03&is=65ed1803&hm=a085ca41417876e5db85aa87f18aacd7bcb57ec93d98530485d02009548f69e8&' alt='logo' className='w-16 me-10' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208050101420102/lg.png?ex=65ff8d03&is=65ed1803&hm=0f91bda84cd2904eb57a41890a9e17a569192df59d32ef6947e8f748afc98a79&' alt='logo' className='w-16 h-14 me-10' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208049014968340/brand.png?ex=65ff8d02&is=65ed1802&hm=971312444071065fcf85b0ac2bd9d3c825489d83c39c2ec6b4799edd70b479ec&' alt='logo' className='w-16 h-12 me-10' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208051565232248/oppo.png?ex=65ff8d03&is=65ed1803&hm=e561e33fe4f39d7d5a606ceb74be0c8e13a825727f104c193ad1c566b5a7a637&' alt='logo' className='w-16 me-10' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216208051179229215/one-plus.png?ex=65ff8d03&is=65ed1803&hm=630f884f7375e38d55a2ebf6761d5c5c9aa6f69cfd1405bb38964d7f70c04d48&' alt='' className='w-16 h-12 me-10' />

                </div>

            </div>
            <div className='text-center mt-14'>
                <h1 className='text-3xl mb-5'>Latest Models</h1>
                <p className='text-xl text-gray-500'>Stay updated with the newest smartphone releases</p>
                <div className='flex flex-row items-center justify-evenly ms-20 mt-10 mb-10'>
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216259715416199258/Designer.png?ex=65ffbd21&is=65ed4821&hm=9fe63703d2dcb6bc603e7097356f503b758b35ba09a2327affda9dc2f6453239&' alt='iphone' className='rounded-xl' id='iPhone' />
                    <div className='me-20'>
                        <h4 className='text-xl font-bold mb-4'>iPhone 15 PRO MAX</h4>
                        <p className='text-gray-500'>Experience the latest technology with the new iPhone 13</p>
                    </div>
                </div>
                <a className='mt-6 rounded text-sky-950 border-2 p-2 border-solid border-sky-950'>View All New Releases</a>
            </div>

            <Footer />
        </div>
    );
};

export default LandingPage;