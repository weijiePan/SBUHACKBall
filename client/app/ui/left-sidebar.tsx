'use client'

import Link from "next/link"
import Image from "next/image"
import { useSelectedLayoutSegment } from 'next/navigation'

export default function LeftSidebar() {
    const segment = useSelectedLayoutSegment();
    return (
        <div className="bg-background-tone1 w-48 flex flex-col px-2 py-2 border">
            <div className="h-10 flex flex-row px-2 py-1 text-foreground rounded w-full">
                <Link className="flex items-center flex-row gap-2" href="/statistics">
                    <svg
                        className="text-text w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22.5q-1.25 0-2.125-.875T9 19.5t.875-2.125T12 16.5t2.125.875T15 19.5t-.875 2.125T12 22.5m0-2q.425 0 .713-.288T13 19.5t-.288-.712T12 18.5t-.712.288T11 19.5t.288.713t.712.287m-6.5-1.75q-1.25 0-2.125-.875T2.5 15.75t.875-2.125T5.5 12.75t2.125.875t.875 2.125t-.875 2.125t-2.125.875m13 0q-1.25 0-2.125-.875T15.5 15.75t.875-2.125t2.125-.875t2.125.875t.875 2.125t-.875 2.125t-2.125.875m-13-2q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m13 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m-13-5.5q-1.25 0-2.125-.875T2.5 8.25t.875-2.125T5.5 5.25t2.125.875T8.5 8.25t-.875 2.125t-2.125.875m13 0q-1.25 0-2.125-.875T15.5 8.25t.875-2.125T18.5 5.25t2.125.875t.875 2.125t-.875 2.125t-2.125.875m-13-2q.425 0 .713-.288T6.5 8.25t-.288-.712T5.5 7.25t-.712.288t-.288.712t.288.713t.712.287m13 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 7.5q-1.25 0-2.125-.875T9 4.5t.875-2.125T12 1.5t2.125.875T15 4.5t-.875 2.125T12 7.5m0-2q.425 0 .713-.288T13 4.5t-.288-.712T12 3.5t-.712.288T11 4.5t.288.713T12 5.5" />
                    </svg>
                    <p className="max-w-md text-md font-medium leading-8 text-text truncate">
                        {segment}
                        Statistics

                    </p>
                </Link>
            </div>
<div className="h-10 flex flex-row px-2 py-1 text-foreground rounded w-full">
                <Link className="flex items-center flex-row gap-2" href="/">
                    <svg
                        className="text-text w-6 h-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22.5q-1.25 0-2.125-.875T9 19.5t.875-2.125T12 16.5t2.125.875T15 19.5t-.875 2.125T12 22.5m0-2q.425 0 .713-.288T13 19.5t-.288-.712T12 18.5t-.712.288T11 19.5t.288.713t.712.287m-6.5-1.75q-1.25 0-2.125-.875T2.5 15.75t.875-2.125T5.5 12.75t2.125.875t.875 2.125t-.875 2.125t-2.125.875m13 0q-1.25 0-2.125-.875T15.5 15.75t.875-2.125t2.125-.875t2.125.875t.875 2.125t-.875 2.125t-2.125.875m-13-2q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m13 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m-13-5.5q-1.25 0-2.125-.875T2.5 8.25t.875-2.125T5.5 5.25t2.125.875T8.5 8.25t-.875 2.125t-2.125.875m13 0q-1.25 0-2.125-.875T15.5 8.25t.875-2.125T18.5 5.25t2.125.875t.875 2.125t-.875 2.125t-2.125.875m-13-2q.425 0 .713-.288T6.5 8.25t-.288-.712T5.5 7.25t-.712.288t-.288.712t.288.713t.712.287m13 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M12 7.5q-1.25 0-2.125-.875T9 4.5t.875-2.125T12 1.5t2.125.875T15 4.5t-.875 2.125T12 7.5m0-2q.425 0 .713-.288T13 4.5t-.288-.712T12 3.5t-.712.288T11 4.5t.288.713T12 5.5" />
                    </svg>
                    <p className="max-w-md text-md font-medium leading-8 text-text truncate">
                        Video Analysis
                    </p>
                </Link>
            </div>
        </div>
    )
}