import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import FloatingCertificates from "@/components/FloatingCertificates";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Projects />
      <Certificates />
      <FloatingCertificates />
    </main>
  );
}
