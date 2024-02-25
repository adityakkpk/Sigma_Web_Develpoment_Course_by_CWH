import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <Image height={100} width={100} src="https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg" alt="Image description" />
    </div>
  );
}
