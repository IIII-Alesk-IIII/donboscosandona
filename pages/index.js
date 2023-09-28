import { Layout, Carousel, SliderNews } from '/components'

export default function Home({data}) {
    return (
      <Layout>
        <Carousel slides={slides} maxWidth={false} height="90"></Carousel>
        <SliderNews data={data} title='Le nostre news' limit={5} />
      </Layout>
    )
}

let slides = [
    {
      titolo: 'Fatti un bel giro',
      descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
      immagine: 'https://source.unsplash.com/random',
      colore: "#ED4C67",
      opacity: 0.5,
      blur: "0.5rem",
      buttonText: 'Scopri di più!',
      buttonUrl: 'https:...',
    },
    {
      titolo: 'Concorso nazionale settore elettrico',
      descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
      colore: '#22aa22',
    },
  ]

  // questa funzione viene invocata al momento del build
  export async function getStaticProps() {
     const res = await fetch('https://channels.donboscosandona.it/api/posts/donboscosandona')
     const data = await res.json()

     return{
         props: { data },
         revalidate: 1800, //rifacio la lettura dal backend e il build ogni mezzora
     }
  }