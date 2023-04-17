import Image from 'next/image'
import Link from "next/link";
import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";


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

    {/* <header className='fixed top-4 left-4 right-4'>
      <Link href="/">
        <Image src="./brand.svg" width="30" height="30"  alt="Logotipo Felipe Genuino. Descrição do logotipo: Símbolo com um F estilizado no tamanho de uma moeda pequena,  em branco na frente de um fundo escuro, fica localizado visualmente em cima e a esquerda do banner, se clicar vai para a home, como só temos uma página ficamos por aqui."/>
      </Link>
    </header> */}
<Whatsapp />
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
       
    
      
        <section role='banner' className={styles.container} > 
                <Image className='py-8' src="./brand.svg" width="80" height="80"  alt="Logotipo Felipe Genuino. Descrição do logotipo: Símbolo com um F estilizado no tamanho de uma moeda pequena,  em branco na frente de um fundo escuro, fica localizado visualmente em cima e a esquerda do banner, se clicar vai para a home, como só temos uma página ficamos por aqui."/>

                <h1 className="text-6xl font-bold">
                  <span className='block'> Olá, sou</span>
                  <span className="font-black"> Felipe Genuino</span>
                </h1>
                <p className="mt-4 text-left">
                  designer de interfaces & frontend apaixonado por acessibilidade.
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
