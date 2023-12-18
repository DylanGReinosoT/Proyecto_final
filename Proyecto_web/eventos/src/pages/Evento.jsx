

export default function Evento() {


  return (
    <div className="my-8">
      <h1 className="text-3xl">Fiesta</h1>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4">Your booking information:</h2>
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl">
          <div>Total price</div>
          <div className="text-3xl">$</div>
        </div>
      </div>
    </div>
  );
}