import { ThemeProvider, useTheme } from "./ThemeContext";

export default function App() {
  return <>
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  </>;
}

function Main() {
  return <main>
    <Article />
    <Article />
    <Article />
  </main>;
}

function Header() {
  const { isDark } = useTheme();

  const headerStyle = {
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
  };

  return <header style={headerStyle}>
    <h1>My Website</h1>
  </header>;
}

function Article() {
  const { isDark } = useTheme();

  const articleStyle = {
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
  };

  return <article style={articleStyle}>
    <h2>title 1</h2>
    <p>blah blah blah</p>
  </article>;
}

function Footer() {
  const { isDark } = useTheme();

  const footerStyle = {
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
  };

  return <footer style={footerStyle}>
    <p>all rights reseved to me</p>
  </footer>;
}