import Image from "next/image"

export default function HomeSloganText() {
    return (
        <div className="text-center mb-6 px-2 pb-10">
            <Image
                src="/HomeSlogan.svg"
                alt="applai.fi"
                width={750}
                height={150}
                className="mx-auto mb-4 mt-6"
                priority
            />
            {/* <div className="font-bitcount text-4xl text-[var(--color-gray)] mb-4">
                The Shortcut to Your Next Job
            </div> */}
            <div className="font-athiti text-[var(--color-gray)]/70 text-[18px]">
                Search thousands of opportunities tailored to your skills and take the next step in your career.
            </div>
        </div>
    )
}