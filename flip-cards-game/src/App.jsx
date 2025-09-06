const App = () => {
  const flipped = false;

  return (
    <>
      <div className="container mx-auto px-4 py-4 text-center">
        <div className="mt-5 mb-5">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">React Flip Cards Game</h1>
        </div>


        <div className="mt-5 mb-5">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            New Game
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-5">
          <div
            className={`group w-64 h-80 [perspective:1000px] cursor-pointer ${flipped ? "flipped" : ""}`}
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-[.flipped]:[transform:rotateY(180deg)]">

              {/* Front */}
              <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 [backface-visibility:hidden]">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far.
                  </p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="text-gray-900 dark:text-white">Back side 🎉</p>
              </div>
            </div>
          </div>

          

        </div>

        <div className="mt-5 mb-5 text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-dark">
            Score:{" "}
            <span className="text-blue-600 dark:text-blue-500">0</span>
          </h1>
        </div>


      </div>
    </>
  )
}

export default App
