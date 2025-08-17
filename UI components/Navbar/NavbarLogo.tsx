import Link from "next/link"
import Image from "next/image"

export default function NavbarLogo() {
    return (
        <Link href="/" className="flex items-center">
            <div className="w-9 h-9 md:w-11 md:h-11 relative">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    sizes="(max-width: 768px) 30px, 50px"
                    className="rounded-full ml-2 "
                    priority
                />
            </div>
        </Link>
    )
}