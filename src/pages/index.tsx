import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/global.css';

const CurrentYear: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return <span>{currentYear}</span>;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="min-h-screen flex justify-center items-center">
        <hgroup className="inline-block m-4">
            <h1 className="text-3xl font-semibold uppercase tracking-wide">
                Romain&nbsp;Monin
            </h1>
            <p className="text-xl font-light text-right italic">
              Artisan web
            </p>
        </hgroup>
    </div>

    <footer className="fixed bottom-0 right-0 text-xs text-right m-4">
      &copy; <CurrentYear />
    </footer>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>