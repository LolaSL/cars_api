// "use client"

// import { fuels, yearsOfProduction } from '@constants';
// import { fetchCars } from "@utils";
// import { HomeProps } from "@types";
// import { CarCard, ShowMore, Searchbar, CustomFilter, Hero } from "@components";
// import Image from 'next/image';

// export default async function Home({ searchParams }: HomeProps) {
//   const allCars = await fetchCars({
//     manufacturer: searchParams.manufacturer || "",
//     year: searchParams.year || 2022,
//     fuel: searchParams.fuel || "",
//     limit: searchParams.limit || 10,
//     model: searchParams.model || "",
//     cylinders: searchParams. cylinders || 0
//   });
//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
//   return (
//     <main className='overflow-hidden'>
//     <Hero />

//     <div className='mt-12 padding-x padding-y max-width' id='discover'>
//       <div className='home__text-container'>
//         <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
//         <p>Explore out cars you might like</p>
//       </div>

//       <div className='home__filters'>
//         <Searchbar />

//         <div className='home__filter-container'>
//           <CustomFilter title='fuel' options={fuels} />
//           <CustomFilter title='year' options={yearsOfProduction} />
//         </div>
//       </div>

//       {!isDataEmpty ? (
//         <section>
//           <div className='home__cars-wrapper'>
//             {allCars?.map((car) => (
//               <CarCard car={car} />
//             ))}
//           </div>

//           <ShowMore
//             pageNumber={(searchParams.limit || 10) / 10}
//             isNext={(searchParams.limit || 10) > allCars.length}
//           />
//         </section>
//       ) : (
//         <div className='home__error-container'>
//           <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
//           <p>{allCars?.message}</p>
//         </div>
//       )}
//     </div>
//   </main>
// );
// }

import { useEffect, useState } from "react";
import { fetchCars } from "@utils";
import { HomeProps, Car } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, Searchbar, CustomFilter, Hero } from "@components";

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllCars = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const cars = await fetchCars({
          manufacturer: searchParams.manufacturer || "",
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || "",
          limit: searchParams.limit || 10,
          model: searchParams.model || "",
        });
        setAllCars(cars);
      } catch (error) {
        setError("Oops, something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllCars();
  }, [searchParams]);

  const isDataEmpty = !allCars || allCars.length === 0;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Error</h2>
            <p>{error}</p>
          </div>
        ) : !isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>No cars found. Please try different search parameters.</p>
          </div>
        )}
      </div>
    </main>
  );
}
