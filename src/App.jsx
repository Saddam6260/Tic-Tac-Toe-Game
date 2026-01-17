import Squre from "./components/Squre";

export default function Board() {
  return (
    <>
      <div>
        <Squre value="1" />;
        <Squre value="2" />;
        <Squre value="3" />;
      </div>
      <div>
        <Squre value="4" />;
        <Squre value="5" />;
        <Squre value="6" />;
      </div>
      <div>
        <Squre value="7" />;
        <Squre value="8" />;
        <Squre value="9" />;
      </div>
    </>
  );
}
