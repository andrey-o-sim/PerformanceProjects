
import Link from 'next/link';

const Index = () => (
    <div>
        <h1>SSR Next.js</h1>
        <Link href="/about">About</Link>
        <Link href="/robots">Robots</Link>
        {/* <a href='./about'>About</a> */}
    </div>
);

export default Index;