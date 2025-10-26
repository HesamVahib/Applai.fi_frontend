import Link from "next/link"
import Image from "next/image"

export default function NavbarLogo() {
    return (
        <Link href="/" className="flex items-center">
            <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={100}
            className="ml-2"
            priority
            />
        </Link>
    )
}