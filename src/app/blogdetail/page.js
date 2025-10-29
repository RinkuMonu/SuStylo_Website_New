import React from 'react'
import Image from "next/image";
import Link from "next/link";



const blogPosts = [
  {
    img: "/Image/blog/blog-img1.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img2.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img3.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img4.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img5.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img6.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img1.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img2.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
  {
    img: "/Image/blog/blog-img3.png",
    title: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "AUG 12, 2025",
    desc: "Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet,",
  },
];

function page() {
    return (
        <>
          <section className="bg-[#F6EFE4] min-h-screen py-10 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-5xl mx-auto bg-[#F6EFE4]">

        <div className="relative">
          <Image
            src="/Image/blog/blog-img5.png"
            alt="Facial Treatment"
            width={500}
            height={100}
            className="rounded-sm w-[90%] bg-cover"
          />

          {/* Social Icons */}
          <div className="absolute -bottom-25 right-4 -translate-y-1/2 flex flex-col gap-4">
            <Link href="#" className="">
              <Image
                          src="/Image/facebook-icon.png"
                          alt="Facebook"
                          width={24}
                          height={24}
                          className="bg-white rounded-full"
                        />
            </Link>
            <Link href="#" className="hover:text-[#E1306C] transition-colors">
              <Image
                          src="/Image/instagram-icon.png"
                          alt="Facebook"
                          width={24}
                          height={24}

                        />
            </Link>
            <Link href="#" className="hover:text-[#0A66C2] transition-colors">
               <Image
                          src="/Image/linkedin-icon.png"
                          alt="Facebook"
                          width={24}
                          height={24}

                        />
            </Link>
            <Link href="#" className="hover:text-[#FF0000] transition-colors">
              <Image
                          src="/Image/youtube-icon.png"
                          alt="Facebook"
                          width={24}
                          height={24}

                        />
            </Link>
            <Link href="#" className="hover:text-[#25D366] transition-colors">
             <Image
                          src="/Image/whatsapp-icon.png"
                          alt="Facebook"
                          width={24}
                          height={24}
                        />
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
            <Image
                          src="/Image/whatsapp-icon.png"
                          alt="Facebook"
                          width={24}
                          height={24}
                        />
            </Link>
          </div>
        </div>

        {/* Blog Content */}
        <div className="mt-6">
          <p className="text-sm text-gray-700 mb-2">
            <span className="underline cursor-pointer hover:text-[#0077b6]">
              AUG 12, 2025
            </span>{" "}
            | By{" "}
            <span className="underline cursor-pointer hover:text-[#0077b6]">
              Alisa Menon
            </span>
          </p>

          <h1 className="text-[20px] font-bold text-gray-900 mb-4">
            Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
            Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>



    <section className='container mx-auto max-w-7xl lg:px-16 px-4 sm:px-10 md:px-14'>
        <h3 className='text-2xl font-bold'>Suggested</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:py-8">
                  {blogPosts.map((post, index) => (
                    <div
                      key={index}
                      className="bg-[#E5D3BF] rounded-lg shadow-[0_4px_4px_0_#00000040] overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
                          {post.title}
                        </h3>
                         <p className="text-xs text-gray-800 font-semibold mb-2 uppercase underline">
                          {post.date}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {post.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
    </section>
        </>
    )
}

export default page
