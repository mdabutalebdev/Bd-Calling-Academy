import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div className="bg-[#77DBD6] py-2">
                <div className="container mx-auto px-24 flex items-center justify-between">
                    <div className="flex items-center gap-5">

                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className='text-[#F79952]' />

                            <p className='font-normal text-base text-[#414042]'>01321231802</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoMailOutline className='text-[#F79952]' />


                            <p className='font-normal text-base text-[#414042]'>info@bdcallingacademy.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-5">
                            <FaFacebookF className='text-xl text-[#414042]' />
                            <FiYoutube className='text-[22px] text-[#414042]' />
                            <ImLinkedin2 className='text-xl text-[#414042]' />
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="#" className='border-r border-[#414042] px-3 text-[#414042]'>
                                Login
                            </Link>
                            <Link href="#" className='text-[#414042]'>
                                Register
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="py-2 bg-white">
                <div className="container mx-auto px-24">
                    <div className="flex items-center gap-10">
                        <div className="border-r border-gray-200">
                            <Image
                                src="/images/logo-BAOst4x9.png"
                                alt='logo'
                                width={100}
                                height={100}
                                className='h-[46px] w-[158px]'
                            />
                        </div>
                        <div className="">


                        </div>
                    </div>
                    <div className=""></div>
                    <div className=""></div>

                </div>
            </div>
        </div>
    )
}

export default Navbar