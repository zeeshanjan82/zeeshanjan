import '@assets/sass/app.scss';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { AppProvider } from '@context/app';

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col h-screen">
			<Header/>
				{children}
			<Footer/>
		</div>
	);
};

function ZeeshanJan({ Component, pageProps }) {
	return (
		<>
		  <Head>
		  	<title>Zeeshan Jan :: Developer By Heart!</title>
		  </Head>
		  <AppProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
		  </AppProvider>
		</>
	);
}

export default ZeeshanJan;