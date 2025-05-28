import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";
import Denah from "./_components/pages/Denah";
import DoAndDont from "./_components/pages/DoAndDont";
import Gallery from "./_components/pages/Gallery";
import Informasi from "./_components/pages/Informasi";
import Jumbotron from "./_components/pages/Jumbotron";
import RSVP from "./_components/pages/RSVP";
import Rundown from "./_components/pages/Rundown";
import SaveTheDate from "./_components/pages/SaveTheDate";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <NavBar />
        <Jumbotron />
        <Informasi />
        <RSVP />
        <DoAndDont />
        <Gallery />
        <Denah />
        <Rundown />
        <SaveTheDate />
        <Footer />
      </div>
    </>
  );
}
