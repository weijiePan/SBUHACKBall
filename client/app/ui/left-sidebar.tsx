'use client'

import Link from "next/link"
import Image from "next/image"

export default function LeftSidebar() {
    return (
        <div className="w-1/5 h-full flex px-2 py-2 border">
 <div className="flex flex-row px-2 py-1 border w-full">
                <Link className="flex flex-row gap-2" href="/statistics">
                    <Image
                        // How do I change color of svgs
                        className="fill-indigo-500 stroke-blue-400 dark:invert text-zinc-600 dark:text-zinc-400"
                        src="/dummyicon.svg"
                        alt="Dummy Icon"
                        width={18}
                        height={18}
                    />
                    <p className="max-w-md text-md font-medium leading-8 text-zinc-600 dark:text-zinc-100"> Statistics
                    </p>
                </Link>
            </div>
        </div>
    )
}