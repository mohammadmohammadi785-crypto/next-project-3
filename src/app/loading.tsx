export default function loading() {
  return (
    <div className="flex flex-col absolute top-0 right-0 justify-center w-full h-screen items-center">
      {/* <h1 className="text-5xl my-2">loading</h1> */}
      <div className="animate-spin w-40 h-40 border-dotted border-20 border-white rounded-full"></div>
    </div>
  );
}
