// pages/index.tsx

import Head from 'next/head';
import ThreeScene from '../components/ThreeScene';

const AboutMe = () => {
    return (
        <div>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="Welcome to my portfolio!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThreeScene />
        </div>
    );
};

export default AboutMe;
