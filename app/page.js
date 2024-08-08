import Card from "@/components/card/page";
import MainCard from "@/components/mainCard/page";
import Nav from "@/components/nav/page";
import Sider from "@/components/sider/page";

export default function Home() {
  return (
    <>
      <div className="flex gap-5 w-full min-h-screen bg-[#E6E3E3]">
        <Sider />
        <div className="w-[85%]">
          <Nav />
          <MainCard />
          <br />
          <br />
          <div className="card-wrapper flex items-center justify-center gap-10 w-full h-[380px] ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
