export default function StripeBox() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 flex justify-center items-center p-5 gap-5">
      <div className="w-96 aspect-[10/16] border-[3px] border-blue-500/80 rounded-lg bg-blue-500/20 overflow-hidden relative shadow-2xl shadow-blue-500/60">
        <div className="stripe-image" />
        <div className="stripe-gradient"></div>
        <div className="absolute inset-0 z-10 w-full h-full p-5">
          <div className="border border-blue-500/70 rounded-lg w-full h-full flex justify-center items-center flex-col">
            <h1 className="text-5xl font-medium text-blue-100">Hello world!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
