import './App.css'

function App() {

  return (
    <>
      <div class="grid grid-cols-10 gap-2">
        <div class="bg-sky-50 aspect-square"></div>
        <div class="bg-sky-100 aspect-square"></div>
        <div class="bg-sky-200 aspect-square"></div>
        <div class="bg-sky-300 aspect-square"></div>
        <div class="bg-sky-400 aspect-square"></div>
        <div class="bg-sky-500 aspect-square"></div>
        <div class="bg-sky-600 aspect-square"></div>
        <div class="bg-sky-700 aspect-square"></div>
        <div class="bg-sky-800 aspect-square"></div>
        <div class="bg-sky-900 aspect-square"></div>
      </div>


      <div class="space-y-5">
        <div class="p-3 bg-white shadow rounded-lg">
          <h3 class="text-xs border-b">font-sans</h3>
          <p class="font-sans">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div class="p-3 bg-white shadow rounded-lg">
          <h3 class="text-xs border-b">font-serif</h3>
          <p class="font-serif">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div class="p-3 bg-white shadow rounded-lg">
          <h3 class="text-xs border-b">font-mono</h3>
          <p class="font-mono">
            Prueba de estilos y como funciona Tailwind.
          </p>
          <button class="bg-red-500 hover:bg-sky-500 font-sans rounded py-2 font-bold text-white" onClick={() => window.open('https://tailwindcss.com/docs/theme', '_blank')}> Botón</button>
{/*           <button class="bg-red-500 hover:bg-sky-500 font-sans rounded py-2 font-bold text-white" onClick={window.open('https://tailwindcss.com/docs/theme', '_blank')}> Botón</button> */}
        </div>
      </div>
    </>
  )
}

export default App
