import React from 'react';

const Footer = () => {
    return (
        <div className='mt-4  w-full bg-gray-800 h-48 text-white text-center pt-20'>

            <p className='xl w-full flex flex-row justify-center items-center'>© 2024 Follow us on social media for the latest updates
                <span className='flex flex-row ms-4'><img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216267401855766589/instagram_3.png?ex=65ffc449&is=65ed4f49&hm=1dd32e689b09de7afe4c97294afbd585434a6786bc9578b13b7a0ad5d333623d&' alt='logo' className='w-6 me-3 h-6' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216267402141237350/pinterest.png?ex=65ffc449&is=65ed4f49&hm=94b8d635f7909b505aee705a1314bcbcab409e0be8b3726dd2f3ae019f260954&' alt='logo' className='w-6 me-3 h-6' />
                    <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1216267402413604904/twitter.png?ex=65ffc449&is=65ed4f49&hm=772af0273ace413a907a3d76f6822e49e12dc44e881c987539326b548def8f7b&' alt='logo' className='w-6 me-3 h-6' />
                </span>
            </p>
        </div>
    );
};

export default Footer;