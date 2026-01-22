export default function Squre({value, onSqureClick}) {

  return (
    <button onClick={onSqureClick} className="font-bold text-3xl text-black bg-amber-100 border-2 border-b-black h-16 w-17 mx-2 my-2">
      {value}
    </button>
  );
}
