"use client";

import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className=" space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Unleash your creativity with Quick Convert—the ultimate online tool
          for limitless and free multimedia conversions. Effortlessly transform
          images, audio, and videos without any restrictions. Begin converting
          today and take your content to new heights!
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
