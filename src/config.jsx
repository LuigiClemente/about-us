import Head from 'next/head'

const titleDefault = 'React Three Next Starter'
const url = 'https://react-three-next.vercel.app/'
const description = 'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS'
const author = 'Author'

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist'
      />
              <link rel="icon" href="/public/foodGallery/friendlySquad.png" />

      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name='og:title' content={title} />
      <meta name='og:type' content='site' />
      <meta name='og:url' content={url} />
      <meta name='og:image' content={'/icons/share.png'} />
      <meta name='og:site_name' content={title} />
      <meta name='og:description' content={description} />

      <link rel='apple-touch-icon' href="/public/foodGallery/friendlySquad.png" />
      <link rel='apple-touch-icon' sizes='16x16' href="/public/foodGallery/friendlySquad.png" />
      <link rel='apple-touch-icon' sizes='32x32' href="/public/foodGallery/friendlySquad.png" />
      <link rel='apple-touch-icon' sizes='180x180' href="/public/foodGallery/friendlySquad.png" />
      <link rel='manifest' href='/manifest.json' />
      <link rel='icon' color='#000000' href="/public/foodGallery/friendlySquad.png" />
      <link rel='apple-touch-startup-image' href="/public/foodGallery/friendlySquad.png" />
    <link rel="icon" href="%PUBLIC_URL%/img/friendlySquad.png" />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href="/public/foodGallery/friendlySquad.png" />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@onirenaud' />
    </Head>
  )
}
