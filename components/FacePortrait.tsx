import Image from 'next/image';

export default function FacePortrait() {
  return (
    <div className="face-portrait-section relative w-[200px] h-[200px] mx-auto">
      <Image
        src="/me.jpeg"
        alt="A portrait photo of me"
        width={200}
        height={200}
        // If you are using Tailwind CSS in your project, 
        // these classes will make the image a perfect circle:
        className="rounded-full object-cover border-4 border-brand-teal shadow-lg"
        priority // Add this if the image is at the very top of the page
      />
    </div>
  );
}
