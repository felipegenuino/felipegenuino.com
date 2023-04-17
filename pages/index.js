import Image from 'next/image'
import Link from "next/link";
import { Inter } from 'next/font/google'


import fs from "fs";
import matter from 'gray-matter'
import { Whatsapp } from '@/components/Whatsapp';

const inter = Inter({ subsets: ['latin'] })



export async function getStaticProps() {
  // get the post
  const files = fs.readdirSync("posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const readFiles = fs.readFileSync(`./posts/${filename}`);
    const { data: frontMatter } = matter(readFiles);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}



export default function Home({ posts }) {
    console.log(`posts: ${posts}`)

  return (
<>

    <header className='fixed top-4 left-4 right-4'>
      <Link href="/">
        <Image src="./brand.svg" width="30" height="30"  alt="Logotipo Felipe Genuino. Descrição do logotipo: Símbolo com um F estilizado no tamanho de uma moeda pequena,  em branco na frente de um fundo escuro, fica localizado visualmente em cima e a esquerda do banner, se clicar vai para a home, como só temos uma página ficamos por aqui."/>
      </Link>
    </header>
<Whatsapp />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div class="sc-bdVaJa jNSogM"><a aria-label="Abre whatsapp, link do meu whatsapp (48) 99911-3048, me mande um oi" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5548999113048" class="whatsapp"><img src="/static/media/IconWhats.1f89a692.svg" aria-hidden="true" alt="Whatsapp"></a></div> */}
      
    
      
        <section role='banner' className="flex flex-col items-center justify-center" >
                <h1 className="text-6xl font-bold">
                  <span> Olá, sou</span>
                  <span className=""> Felipe Genuino</span>
                </h1>
                <p className="mt-4 text-center">
                  designer de interfaces, frontend designer e apaixonado por acessibilidade.
                </p> 
          </section>

           

      {/* {posts?.map((post) => {
            return (
              <Link key={`${post.slug}`} href={`/blog/${post.slug}`}>
                 
                  <div className='mb-4'>
                    <h1 className='text-xl py-3'>{post.frontMatter.title}</h1>
                    <p>{post.frontMatter.metaDesc}</p>
                  </div>
                 
              </Link>
            );
          })} */}
    </main>
    </>
  )
}
