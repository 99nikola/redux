import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainLayout from '../compoenents/layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</Provider>
	);
}

export default MyApp
