'use client'

import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <nav className="px-2 gap-2 flex flex-row items-center justify-between">
            <div className="flex flex-row px-2 py-1 border w-full">
                <Link className="flex flex-row gap-2" href="/statistics">
                    <Image
                        // How do I change color of svgs
                        className="fill-indigo-500 stroke-blue-400 dark:invert text-zinc-600 dark:text-zinc-400"
                        src="/dummyicon.svg"
                        alt="Dummy Icon"
                        width={24}
                        height={24}
                    />
                    <p className="max-w-md text-md font-medium leading-8 text-zinc-600 dark:text-zinc-100"> Upload a video for analysis
                    </p>
                </Link>
            </div>
            <div className="flex gap-2 flex-row">
                <div className="border flex justify-center items-center w-9 h-9">
                    <Image
                        className="dark:invert"
                        src="/dummyicon.svg"
                        alt="Dummy Icon"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="border flex justify-center items-center w-9 h-9">
                    <Image
                        className="dark:invert"
                        src="/dummyicon.svg"
                        alt="Dummy Icon"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </nav>
    )
}