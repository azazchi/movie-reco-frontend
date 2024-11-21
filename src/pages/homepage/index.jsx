import MovieCard from "../../components/MovieCard";

export default function HomePage() {
  return (
    <>
      
      <MovieCard />

      {/* tailwind body of home page */}
      <div class="h-full flex flex-col relative bg-[url('src/assets/img/background-pic.jpg')] bg-no-repeat bg-cover bg-fixed z-10">
        {/* opacity of background picture */}
        <div class="absolute bg-black inset-0 opacity-80"></div>
        
          {/* most popular movie container */}
          <div class="flex flex-col gap-y-5 z-0 p-5">

            <p class="text-[#FBFF00] text-3xl"> Most Popular Movies </p>

            <div class="flex justify-between">

              <div class="bg-[url('src/assets/img/furiosa.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80"></div>
              <div class="bg-[url('src/assets/img/ghostbuster.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80"></div>
              <div class="bg-[url('src/assets/img/hitman.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80"></div>
              <div class="bg-[url('src/assets/img/ghostlight.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80"></div>
              <div class="bg-[url('src/assets/img/dune.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80"></div>
              <div class="bg-[url('src/assets/img/fallguy.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80"></div>

            </div>

          </div>

          {/* top rating movies container */}
          <div class="flex flex-col gap-y-5 z-0 p-5">

            <p class="text-[#FBFF00] text-3xl"> Top Rating Movies </p>

            <div class="flex justify-between">

              <div class="bg-[url('src/assets/img/furiosa.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80 font-bold text-white custom-shadow">
                <p class="mt-1 ml-1">⭐ 4.0 </p>
              </div>

              <div class="bg-[url('src/assets/img/ghostbuster.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80 font-bold text-white custom-shadow">
                <p class="mt-1 ml-1">⭐ 4.0 </p>
              </div>

              <div class="bg-[url('src/assets/img/hitman.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80 font-bold text-white custom-shadow">
                <p class="mt-1 ml-1">⭐ 4.0 </p>
              </div>

              <div class="bg-[url('src/assets/img/ghostlight.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80 font-bold text-white custom-shadow">
                <p class="mt-1 ml-1">⭐ 4.0 </p>
              </div>

              <div class="bg-[url('src/assets/img/dune.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80 font-bold text-white custom-shadow">
                <p class="mt-1 ml-1">⭐ 4.0 </p>
              </div>

              <div class="bg-[url('src/assets/img/fallguy.jpg')] bg-no-repeat bg-cover bg-center w-52 h-80 font-bold text-white custom-shadow">
                <p class="mt-1 ml-1">⭐ 4.0 </p>
              </div>

            </div>

          </div>

      </div>

    </>
  );
}
