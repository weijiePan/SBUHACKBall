import Image from "next/image";

export default function Home() {
  return (
    <div className="h-lvh rounded flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="rounded flex w-full h-full flex-col items-center justify-center bg-white dark:bg-zinc-900">
        <p className="text-xl max-w-md text-center font-medium  text-zinc-600 dark:text-zinc-100">
          You don't have any videos in the database. Upload a video to get started.
        </p>
      </main>
    </div>
  );
}
