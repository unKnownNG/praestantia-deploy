import Image from "next/image";
import React from 'react'

export default function Sponsors() {
  return (
    <>
    <div className="">
        <div className="flex items-center justify-center text-lg">

        <h1 className="subheading text-3xl mt-4">OUR SPONSORS</h1>
        </div>
        <div className="flex justify-center align-middle m-10 mb-11">
        <Image
                src={"/activeGalaxy.png"}
                alt={"www.google.com"}
                width={550}
                height={160}
                objectFit="auto"

                />
                </div>
                <div className="flex justify-center align-middle m-10">
              <Image
                src={"/nirloba.jpg"}
                alt={"www.google.com"}
                width={550}
                height={160}
                objectFit="auto"

              />
        </div>
    </div>
    </>
  )
}
