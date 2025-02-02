import dynamic from "next/dynamic";

const DynamicHomeScreen = dynamic(() => import("@/screens/home"), {
  ssr: false,
});

export default function Home() {
  return <DynamicHomeScreen />;
}
