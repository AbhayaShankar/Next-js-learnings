import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        <li>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link href="/blog/dd">BLOGS</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/clients">CLIENTS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;
