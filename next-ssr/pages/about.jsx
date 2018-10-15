import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
    return (
        <div style={{ fontSize: '20px', color: 'blue' }}>
            <h1>About</h1>
            <Link href="/">Back</Link>
            <Image />
        </div>
    );
}

export default About;